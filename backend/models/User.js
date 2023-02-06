import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2, //min 2 value
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true, // you can not have duplicate email
  },
  password: {
    type: String,
    required: true,
    min: 5,
    unique: true, // you can not have duplicate email
  },
  email: {
    type: String,
    default: " ",
  
  },

});
