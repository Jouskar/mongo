const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://tolgahan:DBwuBDMzvQ6FnY2d@cluster0.o8gvf.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            console.log("connected");
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}

const getdb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database';
}

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;