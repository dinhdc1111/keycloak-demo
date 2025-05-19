import express from "express";

const router = express.Router();

const fruitsData = ["apple", "banana", "orange"];

const dataPermission = {
  "dongcongdinh2018@gmail.com": ["apple", "banana"],
  "dinhdc11@gmail.com": ["BMV, Mercedes"],
}
router.get("/", (req, res) => {
  try {
    const email = req.user;
    console.log("email", email);
    res.status(200).send(dataPermission[email]);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
