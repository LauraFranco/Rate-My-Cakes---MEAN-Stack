const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Comment = mongoose.model('Comment');

module.exports = {

	show: function(req,res){
		Cake.find({},function(err,cake){
            if (err){
                res.json(err);
            }
            else{
                res.json(cake);
            }
        })
    },

	show_one: function(req,res){
		Cake.findOne({_id:req.params.id},function(err,cake){
            if (err){
                res.json(err);
            }
            else{
                res.json(cake);
            }
		});
	},

	create: function(req,res){
		Cake.create(req.body, function(err, data){
			if (err){
                res.json(err);
            }
            else{
               res.json(data)
            }
        })
    },

    createComment: function(req,res){
        Comment.create(req.body, function(err, data){
            if (err){
                res.json(err);
            }
            else{
                Cake.findOneAndUpdate({_id:req.params.id}, {$push : {comments: data}}, function(err, data){
                    if (err){
                        res.json(err);
                    }
                    else{
                       res.json(data)
                    }
                })
            }
        })
    }
}
