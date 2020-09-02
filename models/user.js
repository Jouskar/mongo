const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);









/*const { mongoConnect } = require('../utilities/database');

const getDb = require('../utilities/database').getdb;

class User{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    save() {
        const db = getDb();

        db.collection('users')
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
        return db.collection('users')
                .find({})
                .toArray()
                .then(posts => {
                    return posts;
                })
                .catch(err => console.log(err));
    }

    static deleteById(userName) {
        const db = getDb();
        return db.collection('users')
                .deleteOne({id: userName})
                .then(()=>{console.log('deleted')})
                .catch(err=> {console.log(err)});
    }
}

module.exports = User;*/