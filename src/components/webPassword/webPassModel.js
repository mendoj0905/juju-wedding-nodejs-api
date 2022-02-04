import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const WebPassSchema = new Schema({
  hash: {
    type: String,
    required: true
  }, 
  wedding: {
    type: String,
    required: true
  }
}, { collection: 'password'});

export default model('WebPass', WebPassSchema);