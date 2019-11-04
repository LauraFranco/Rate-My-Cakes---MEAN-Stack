const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cake', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
    rating: {type: Number, required: [true, "Rating is required!"]},
    message: {type: String, required: [true, "Messages must have content"], minlength: [2, "Messages should not have less than 2 characters!"]},
  }, {timestamps: true})

const CakeSchema = new mongoose.Schema({
  baker_name: {type: String, required: [true, "Name is required!"], minlength: [2, "Name should have more than 2 characters"] },
  image: {type: String, required: [true, "Cake should have an image!"]},
  comments: [CommentSchema]
}, {timestamps: true})

const Cake = mongoose.model('Cake', CakeSchema);
const Comment = mongoose.model('Comment', CommentSchema);


