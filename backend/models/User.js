import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: ture,
    min: 2,
    max: 50,
  },
  lastName: {
    type: String,
    require: ture,
    min: 2,
    max: 50,
  },
})
