import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PhotoSchema = new Schema ({
  filename: {
    type: String,
    required: true
  },
  src: {
    type: String,
  },
  subheader: {
    type: String
  },
  createDate: {
    type: Date,
  },
  height: {
    type: Number,
  },
  width: {
    type: Number,
  },
  wedding: {
    type: String,
    required: true
  }
}, { collection: 'photos'});

export default model("Photo", PhotoSchema)