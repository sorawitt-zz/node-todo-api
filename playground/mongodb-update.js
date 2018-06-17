// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log('Unable to connect to mango bd server');
    }

    console.log('Connected to Mango DB server');

    const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b265b0cbb8e211ccc71601f')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });

  // db.close();
});
