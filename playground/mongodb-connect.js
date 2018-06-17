const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Unable to connect to mango bd server');
    }

    console.log('Connected to Mango DB server');

    const db = client.db('TodoApp');

    db.collection('Users').find({
        age: 22
    }, (err, result) => {
        console.log(err, result);
    })

    client.close();
});