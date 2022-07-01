import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PhotoSchema = new Schema ({
  fileName: {
    type: String,
    required: true
  },
  contentType: {
    type: String, 
    required: true
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
  location: {
    type: String
  },
  wedding: {
    type: String,
  }
}, { collection: 'photos'});

export default model("Photo", PhotoSchema)