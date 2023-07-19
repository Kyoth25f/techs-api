import express from "express";
import techRoute from "./tech";

const router = express.Router();

router.get("/", function (req, res) {
  res.send("All systems operational");
});

router.use("/tech", techRoute);

export default router;
