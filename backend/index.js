import express from "express";
import dotenv from "dotenv";
import router from "./routes/documents.js";
import cors from "cors";
import auth from "./routes/auth.js";

(async function () {
  dotenv.config();

  const { PORT } = process.env;
  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  app.use(cors());
  app.use("/documents", auth, router);
})();
