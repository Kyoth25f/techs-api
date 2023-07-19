import express from "express";
import cors from "cors";
import { connect } from "mongoose";

import "dotenv/config";
const port = Number(process.env.PORT as string) || 80;

import routes from "./routes";

const app = express();

async function start() {
  await connect(process.env.DB_CONN_STRING as string);

  app.use("/", routes);

  app.use(cors());
  app.listen(port, () => console.log("Listening on port", port));
}

start();
