import express from "express";

const router = express.Router();

const fruitsData = ["apple", "banana", "orange"];

router.get("/", (req, res) => {
  try {
    res.status(200).send(fruitsData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
