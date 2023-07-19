import express from "express";

const router = express.Router();

router.post("/add", (req, res) => {
  res.send("Added a new user");
});

export default router;
