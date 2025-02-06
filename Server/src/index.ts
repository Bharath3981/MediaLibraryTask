import express from "express";
import cors from "cors";
import { getMedia } from "./controllers/media";
import mediaRouter from "./routes/media";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", mediaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
