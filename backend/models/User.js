import mongoose from 'mongoose'
//const {schema } = mongoose; //ref: mongoose website
const UserSchema = new mongoose.Schema(
  {
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
    },
    picturePath: {
      type: String,
      default: ' ',
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true },//to give us automatic timestamps to when it was created or updated.
  //Mongoose will add two properties of type date : createdAt and updatedAt (whenever you update the document
  //using save(), updateOne(), updateMany(), findOneAndUpdate(), update(), replaceOne(), or bulkWrite())
); // or it can be userSchema.set('timestamps', true)

const User = mongoose.model("User", UserSchema);
export default User;

//if we want to add additional keys later, use Schema add method ex. UserSchema.add({name: 'string', color: 'string,})
