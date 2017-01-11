const express = require('express')
const router = express.Router();

const Post = require('../models/post');


// router.get('/by-subreddit/:subreddit', (req, res) => {
// 	var subredditId = req.params.subreddit.toLowerCase();//had to change let to var
// 	subredditId = subredditId.replace(/ /g, '');

// 	Post.find({
// 		subredditId: subredditId
// 	}, (err, results) => {
// 		res.json(results);
// 	});
// });

router.get('/search/:topic', (req, res) => {
	var subredditId = req.params.topic.toLowerCase();//had to change let to var
	subredditId = subredditId.replace(/ /g, '');

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
		res.json(results);
	});
});

//---------------------------------------------------------------------------

router.get('/topics', (req, res) => {

	Post.find({}).exec( (err, results) => {
		if ( err ){
			console.log( err )
		}else{
		res.send(results);
		}
	});
});



//--------------------------------------------------
// router.post('/post', ( req, res ) => {
// 	var newPostTopic = req.body.title.toLowerCase();
// 	newPostTopic = newPostTopic.replace(/ /g, '');

// 	Post.create({
// 		title: newPostTopic,
// 		content: "This is new content",
// 		subredditId: "test"
// 	}, function( err ) {
// 			if ( err ) {
// 				console.log( err )
// 			}
// 			else {
// 				res.send("Post Made")
// 			}
// 		}
// 	)
// 	})

	router.post('/post', ( req, res ) => {
	var newPostTopic = req.body.topic.toLowerCase();
	newPostTopic = newPostTopic.replace(/ /g, '');

	Post.create({
		topic: newPostTopic,
		snippet: "This is the snippet, hardcoded, from routes/posts.js",
		title: "hardcoded title these are placeholder"
	}, function( err ) {
			if ( err ) {
				console.log( err )
			}
			else {
				res.send("Post Made")
			}
		}
	)
	})

module.exports = router;
