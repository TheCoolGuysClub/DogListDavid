const express = require(`express`);
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);
const {Dog}=require(`./models/dog.js`);
const app = express();
//-------------------------------set up----------------------------------
const port = process.env.PORT||3000;

mongoose.Promise = global.Promise;
const database = process.env.MONGODB_URI||`mogodb://localhost:27017`;
mongoose.connect(database)
.then(()=>{
  console.log(`connected to database`);
}).catch(()=>{
  console.log(`unable to connect to database`);
})
//-------------------------------set up----------------------------------
app.get(`/`,(req,res)=>{
  res.send(`GET /`);
})

app.post(`/dogs`,(req,res)=>{
  const dog = new Dog({
    name:`Spot`,
    age:2
  })
  dog.save()
    .then(dog=>{
      res.send(dog);
    })
    .catch(error=>{
      res.status(400).send();
    })
})

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})
