const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }    
});

module.exports = mongoose.model('Post', postSchema);






/*const { mongoConnect } = require('../utilities/database');

const getDb = require('../utilities/database').getdb;

class Post{
    constructor(id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    save() {
        const db = getDb();

        db.collection('posts')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findAll() {
        const db = getDb();
        return db.collection('posts')
                .find({})
                .toArray()
                .then(posts => {
                    return posts;
                })
                .catch(err => console.log(err));
    }

    static deleteById(postId) {
        const db = getDb();
        return db.collection('posts')
                .deleteOne({id: postId})
                .then(()=>{console.log('deleted')})
                .catch(err=> {console.log(err)});
    }
}

module.exports = Post;*/