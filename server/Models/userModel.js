const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlegth:3,
        maxlength:30
    },
    email:{
        type:String,
        required:true,
        minlegth:3,
        maxlength:30,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlegth:8,
        maxlength:1024
     }
  },
  {
    timestamps:true
  });

  const userModel = mongoose.model("User",userSchema);

  module.exports = userModel;