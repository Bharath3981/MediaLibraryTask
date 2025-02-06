const express = require("express");
import { Request, Response } from "express";
import { getMediaById } from "../controllers/media";
import { generateResponse } from "../utils/helper";
import { getMedia } from "../controllers/media";

const mediaRouter = express.Router();

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

export default mediaRouter;
