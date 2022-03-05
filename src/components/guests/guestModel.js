import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const GuestSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  familyMembers: {
    type: Array,
  },
  isAttending: {
    type: Boolean,
    default: false,
  },
  childrenAttending: {
    type: Boolean,
  },
  children: {
    type: Array,
  },
  plusOne: {
    type: Boolean,
    default: false
  }
}, { collection: 'guests' });

export default model("Guest", GuestSchema);