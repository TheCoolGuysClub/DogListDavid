const express = require(`express`);

const app = express();

app.get(`/`,(req,res)=>{
  req.send(`GET /`);
})
