const axios = require('axios')



const helper = {

getPosts: () => {
    return axios.get('/news/topics')
},

createPost: (newPost, newSnippet) => { 
    return axios.post('/news/post', { topic: newPost, snippet: newSnippet })
},

createComment: function(/*this will need the id*/) {},

deleteComment: function(/*this will need the id*/) {}


}

module.exports = helper

// saved line from my package.json
// "dev": "webpack-dev-server --content-base public --inline --hot --host 0.0.0.0 --port 3000"