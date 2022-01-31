import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  }
}, { collection: 'users'});

export default model("User", UserSchema);