import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
// import models from './models.js'
import bodyParser from 'body-parser'
import Post from './models.js'

// var bodyParser = require('body-parser')
// const express = express()
const app = express()
const port = process.env.PORT || 8081;
mongoose.connect("mongodb://localhost:27017/memes")
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())
app.use(cors())

app.use(function (req, res, next) {
  req.headers['content-type'] = 'application/json';
  next();
});


app.get('/', function (req, res) {
  res.send('Hello World 123')
})
 

app.post("/memes", (req, res) =>{
  // Post.find({name: req.body.name, caption: req.body.name, url: req.body.url}, (err, example) =>{
    // if(err){
    //   res.status(500).send(err);
    // }
    // if(example){
    //     res.status(409).send("Already exist");
    // }else{
      var post =new Post(req.body);
      post.save((err,data) =>{
        if(err){
          res.status(500).send(err);
    
        }else{
          res.status(201).send(data);
        }
      })
      
    // }
  // }
  // )

  // Post.create(body, (err, data) =>{
  //   if(err){
  //   }else{
  //   }
  // })

})

app.get("/memes", (req, res) =>{
  Post.find((err, data) =>{
    if(err){
      res.status(500).send(err);
    }else{
      res.status(200).send(data);
    }
  })
});

app.get("/memes/:id", (req, res) =>{
  Post.findById(req.params.id, (err, data) =>{
    {
      if(err){
        res.send(404).send(err);
      }else{
        res.status(200).send(data);
      }
    }
  }) 
})

app.patch("/memes/:id", (req, res) =>{
  Post.findById(req.params.id, (err, data) =>{
      if(err){
        res.send(404).send(err);
      }else{
        data.caption = req.body.caption
        data.url = req.body.url
        data.save()
        res.status(201).send(data);
      }
  })
})

app.listen(port, () => console.log(`Server started on ${port}`))