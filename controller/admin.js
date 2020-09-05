const Post = require('../model/post');
const User = require('../model/user');
const { CustomError, BadRequest, NotFound } = require('../utils/error');
const CustomSuccess = require('../utils/success');

//Post Functions
exports.postAddPosts = async (req, res, next)=> {
    const title = req.body.title;
    const body = req.body.body;

    try {

        if (!title || !body) {
            throw new CustomError('Gerekli alanlar eksik!');
        }

        const post = new Post(
            {
                title: title,
                body: body
            }
        );

        let newPost = await post.save();
        res.json(newPost);
    }
    catch(err) {
        next(err);
    }
};

exports.getPosts = (req, res, next)=>{
    Post.find()
        .then(posts => {
            if (posts.length == 0) {
                throw new NotFound("Kullanıcı verileri boş!");
            }
            res.json(posts);
        }).catch(err=> {next(err)});
};

exports.deleteOnePost = (req, res)=>{
    const title = req.body.title;

    Post.deleteOne({title: title})
        .then(() => {
            res.json(new CustomSuccess('Post başarıyla silindi.'));
        })
        .catch(err=>{console.log(err)});
};

//User Functions
exports.postAddUser = async (req, res, next)=> {
    const name = req.body.name;
    const email = req.body.email;

    try {
        const userFind = await User.findOne({name: name});

        if (userFind) {
            throw new CustomError("Kullanıcı zaten mevcut!");
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
    }
    catch(err) {
        next(err);
    }
};

exports.getUsers = (req, res, next)=>{
    User.find()
        .then(users => {
            if (users.length == 0) {
                throw new NotFound("Kullanıcı verileri boş!");
            }
            res.json(users);
        }).catch(err=> {next(err)});
};

exports.deleteOneUser = (req, res)=>{
    const name = req.body.name;

    User.deleteOne({name: name})
        .then(() => {
            res.send(new CustomSuccess('Kullanıcı başarıyla silindi.'));
        })
        .catch(err=>{console.log(err)});
};