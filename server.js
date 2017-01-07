const express = require('express');

const logger = require('morgan')
const mongoose = require('mongoose')
const app = express();

const posts = require('./api/routes/posts');

const PORT = process.env.PORT || 3000;

// Run Morgan for Logging  -------------------------------------

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'));

//--------------------------------------------------------------
mongoose.connect('mongodb://localhost/reddit');

const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
})

//--------------------------------------------------------------

app.use('/posts', posts);

// LISTENER ----------------------------------------------------

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
})
