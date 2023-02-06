import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: ture,
    min: 2, //min 2 value
    max: 50,
  },
  lastName: {
    type: String,
    require: ture,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    require: ture,
    max: 50,
    unique: true // you can not have duplicate email
  }
})
