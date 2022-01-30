import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const GuestSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, { collection: 'guests' });

export default model("Guest", GuestSchema);