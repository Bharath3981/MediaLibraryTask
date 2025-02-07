import express from "express";
import { Request, Response } from "express";
import { getMediaById } from "../controllers/media";
import { generateResponse } from "../utils/helper";
import { getMedia } from "../controllers/media";
import { addMedia } from "../controllers/media";
import multer from "multer";
import path from "path";
import { updateMedia } from "../controllers/media";
import { getMediaByTag } from "../controllers/media";

const mediaRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Specify the file name
  },
});
const upload = multer({ storage: storage });

//Write method to get all media
mediaRouter.get("/media", async (req: Request, res: Response) => {
  const midias = await getMedia();
  generateResponse(res, 200, "All media fetched successfully", midias);
});

mediaRouter.get("/media/:mediaid", async (req: Request, res: Response) => {
  const { mediaid } = req.params;
  const media = await getMediaById(mediaid);
  if (!media) {
    generateResponse(res, 404, "Media not found");
  } else {
    generateResponse(res, 200, "Media found", media);
  }
});

//write method to add media
mediaRouter.post("/media", async (req: Request, res: Response) => {
  const media = req.body;
  media.tags = media.tags.split(",").map((tag: string) => tag.trim());
  const inseretedMedia = (await addMedia(media)) || {};
  generateResponse(res, 200, "Media added successfully", inseretedMedia);
});

//write method to update media
mediaRouter.put("/media/:mediaid", async (req: Request, res: Response) => {
  const { mediaid } = req.params;
  const media = req.body;
  console.log(media);
  if (!Array.isArray(media.tags)) {
    const tags = media.tags.split(",").map((tag: string) => tag.trim());
    media.tags = tags;
  }

  const updatedMedia = await updateMedia(mediaid, media);
  if (!updatedMedia) {
    generateResponse(res, 404, "Media not found");
  } else {
    generateResponse(res, 200, "Media updated successfully", updatedMedia);
  }
});

//write method to filter media by tag
mediaRouter.get("/media/tag/:tag", async (req: Request, res: Response) => {
  const { tag } = req.params;
  const media = await getMediaByTag(tag);
  if (!media) {
    generateResponse(res, 404, "Media not found");
  } else {
    generateResponse(res, 200, "Media found", media);
  }
});

//Write method to upload media
mediaRouter.post(
  "/media/thumbnail",
  upload.single("thumbnail"),
  (req: Request, res: Response) => {
    if (!req.file) {
      generateResponse(res, 400, "No file uploaded");
    } else {
      generateResponse(res, 200, "Media uploaded successfully", req.file);
    }
  }
);

export default mediaRouter;
