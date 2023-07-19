import { Schema, model, Types } from "mongoose";

interface ITech {
  name: string;
  maintainer: string;
  layer: string;
  launchYear?: number;
  language?: string;
  svg: Buffer;
}

const techSchema = new Schema<ITech>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  maintainer: {
    type: String,
    required: true,
  },
  layer: {
    type: String,
    required: true,
  },
  launchYear: {
    type: Number,
    required: false,
  },
  language: {
    type: String,
    required: false,
  },
  svg: {
    type: Buffer,
    required: false,
  },
});

const techModel = model<ITech>("Technology", techSchema);

export default techModel;
