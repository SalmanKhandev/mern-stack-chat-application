const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');
require('dotenv').config();
const uri = process.env.MONGOOSE_URL;



const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users",userRoute);


const port = process.env.PORT || 5000;

app.get("/",(req,res)=>{
   res.send("Welcome to our chat app API...");
});


mongoose.connect(uri).then(()=>{
   console.log('Database is connected successfully');
}).catch((error)=>{
    console.log(error);
})

app.listen(port,(req,res)=>{
  console.log(`Server running on port:${port}`);
});