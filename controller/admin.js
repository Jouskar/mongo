const Post = require('../model/post');
const User = require('../model/user');
const CustomError = require('./error');
const CustomSuccess = require('./success');

//Post Functions
exports.postAddPosts = async (req, res)=> {
    try {
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
    }
    catch(err) {
        res.send(new CustomError(err.message));
    }
};

exports.getPosts = (req, res)=>{
    Post.find()
        .then(posts => {
            res.send(posts);
        });    
};

exports.deleteOnePost = (req, res)=>{
    const title = req.body.title;

    Post.deleteOne({title: title})
        .then(() => {
            res.send(new CustomSuccess('Post başarıyla silindi.'));
        })
        .catch(err=>{console.log(err)});
};

//User Functions
exports.postAddUser = async (req, res)=> {
    const name = req.body.name;
    const email = req.body.email;
    
    User.findOne({name: name}, async (err, user)=> {
        if (err) {
            console.log(err);
        }
        if (user) {
            res.send(new CustomError("Kullanıcı zaten mevcut!", 409));
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
    });    
};

exports.getUsers = (req, res)=>{
    User.find()
        .then(posts => {
            res.send(posts);
        });    
};

exports.deleteOneUser = (req, res)=>{
    const name = req.body.name;

    User.deleteOne({name: name})
        .then(() => {
            res.send(new CustomSuccess('Kullanıcı başarıyla silindi.'));
        })
        .catch(err=>{console.log(err)});
};

