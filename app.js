const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');

app.use(bodyParser.json());

const mongoConnect = require('./utilities/database').mongoConnect;
const Post = require('./models/post');
const User = require('./models/user');

//Post Functions
app.post('/posts', async (req, res)=> {
    const title = req.body.title;
    const body = req.body.body;

    const post = new Post(
        {
            title: title,
            body: body
        }
    );

    let newPost = await post.save();
    res.send(newPost);
});

app.get('/posts', (req, res)=>{
    Post.find()
        .then(posts => {
            res.send(posts);
        });    
});

app.delete('/posts', (req, res)=>{
    const title = req.body.title;

    Post.deleteOne({title: title})
        .then(() => {
            res.send("success");
        })
        .catch(err=>{console.log(err)});
});

//User Functions
app.post('/users', async (req, res)=> {
    const name = req.body.name;
    const email = req.body.email;
    
    User.findOne({name: name}, async (err, user)=> {
        if (err) {
            console.log(err);
        }
        if (user) {
            res.send("Kullanıcı zaten mevcut!");
        }
        else {
            const user = new User(
                {
                    name: name,
                    email: email
                }
            );
            let newUser = await user.save();
            res.send(newUser);
        }
    })

    
});

app.get('/users', (req, res)=>{
    User.find()
        .then(posts => {
            res.send(posts);
        });    
});

app.delete('/users', (req, res)=>{
    const name = req.body.name;

    User.deleteOne(name)
        .then(() => {
            res.send("success");
        })
        .catch(err=>{console.log(err)});
});

/*mongoConnect(() => {
    app.listen(3000);
});*/

mongoose.connect('mongodb+srv://tolgahan:DBwuBDMzvQ6FnY2d@cluster0.o8gvf.mongodb.net/test?retryWrites=true&w=majority')
    .then(()=> {
        console.log('connected to mongodb');
        app.listen(3000);
    })
    .catch(err => {console.log(err)});