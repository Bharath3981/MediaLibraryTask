import express from "express";
import cors from "cors";
import { getMedia } from "./controllers/media";
import mediaRouter from "./routes/media";
import path from "path";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());

// Serve static files from the 'uploads' directory
app.use("/api/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use("/api", mediaRouter);

const PORT = process.env.PORT || 3981;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
