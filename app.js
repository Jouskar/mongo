const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

const mongoConnect = require('./utilities/database').mongoConnect;
const Post = require('./models/post');
const User = require('./models/user');

//Post Functions
app.post('/posts', (req, res)=> {
    const id = req.body.id;
    const title = req.body.title;
    const body = req.body.body;
    
    const post = new Post(id, title, body);
    post.save();
    res.send();
});

app.get('/posts', (req, res)=>{
    Post.findAll()
        .then(posts => {
            res.send(posts);
        });    
});

app.delete('/posts', (req, res)=>{
    const id = req.body.id;

    Post.deleteById(id)
        .then(() => {
            res.send("success");
        })
        .catch(err=>{console.log(err)});
});

//User Functions
app.post('/users', (req, res)=> {
    const id = req.body.id;
    const name = req.body.name;
    
    const user = new User(id, name);
    user.save();
    res.send();
});

app.get('/users', (req, res)=>{
    User.findAll()
        .then(posts => {
            res.send(posts);
        });    
});

app.delete('/users', (req, res)=>{
    const id = req.body.id;

    User.deleteById(id)
        .then(() => {
            res.send("success");
        })
        .catch(err=>{console.log(err)});
});
mongoConnect(() => {
    app.listen(3000);
});