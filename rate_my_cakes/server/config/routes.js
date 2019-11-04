const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Comment = mongoose.model('Comment');

const cake = require('../controllers/cake.js');

module.exports = function(app){

	app.get('/cakes', function(req, res) {
	    cake.show(req,res);
	});

	app.get('/cakes/:id', function(req, res) {
	    cake.show_one(req,res);
	});


	app.post('/cakes/create', function(req, res) {
	    cake.create(req,res);
	});

	app.post('/comments/create/:id', function(req, res) {
	    cake.createComment(req,res);
	});

	app.get('/comments/:id', function(req, res) {
	    cake.show_one(req,res);
	});
};