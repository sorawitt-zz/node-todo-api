const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Unable to connect to mango bd server');
    }

    console.log('Connected to Mango DB server');

    const db = client.db('TodoApp');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Sorawit',
    //     age: 22,
    //     location: 'Sukhothai'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Users', err);
    //     }

    //     console.log(result.ops);
    // });

    db.collection('Users').find({
        age: 22
    }, (err, result) => {
        console.log(err, result);
    })

    client.close();
});