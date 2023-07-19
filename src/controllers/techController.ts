import Express from "express";

const router = Express.Router();

router.post("/add", (req, res) => {
  res.send("Added a new user");
});

export default router;
