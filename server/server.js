var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'Eat lunch'
// })

// newTodo.save().then((result) => {
//   console.log('Save todo', result);
  
// }, (err) => {
//   console.log('Unable to save todo', err);
  
// });

var otherTodo = new Todo({ });

otherTodo.save().then( (result) => {
  console.log('Saved', result);
  
}, (err) => {
  console.log('Unable to save', err);
  
});


