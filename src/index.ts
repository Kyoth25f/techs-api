import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import dotenv from "dotenv";

import routes from "./routes";

const port = 80;
const app = express();
dotenv.config({ path: `.env` });

async function start() {
  await connect(process.env.DB_CONN_STRING as string);

  app.use("/", routes);

  app.use(cors());
  app.listen(port, () => console.log("Listening on port", port));
}

start();
