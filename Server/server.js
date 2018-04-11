const express = require(`express`);
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);
const {Dog}=require(`./models/dog.js`);
const app = express();
const port = process.env.PORT||3000;

mongoose.Promise = global.Promise;
const database = process.env.MONGODB_URI||`mogodb://localhost:27017`;

app.get(`/`,(req,res)=>{
  res.send(`GET /`);
})

app.post(`/dogs`,(req,res)=>{
  res.send(`POST /dogs`);
})

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})
