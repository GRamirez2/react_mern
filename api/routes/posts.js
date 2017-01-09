const express = require('express')
const router = express.Router();

const Post = require('../models/post');


router.get('/by-subreddit/:subreddit', (req, res) => {
	var subredditId = req.params.subreddit.toLowerCase();//had to change let to var
	subredditId = subredditId.replace(/ /g, '');

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
		res.json(results);
	});
});

router.post('/new', ( req, res ) => {
	var newPostTopic = req.body.title.toLowerCase();
	newPostTopic = newPostTopic.replace(/ /g, '');

	Post.create({
		title: newPostTopic,
		content: "This is new content",
		subredditId: "test"
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
