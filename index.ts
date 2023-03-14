import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import dotenv from 'dotenv'

import controller from './src/controllers/controller';
import techController from './src/controllers/techController';


const port = 80;
const app = express();
dotenv.config({ path: `.env` });

async function start() {

  await connect(process.env.DB_CONN_STRING as string);

  //routes
  app.use('/', controller);
  app.use('/tech', techController);

  app.use(cors());
  app.listen(port, () => console.log('Listening on port', port));

}

start()