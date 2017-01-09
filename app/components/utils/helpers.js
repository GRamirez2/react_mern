const axios = require('axios')



const helper = {

getPosts: () => {},

createPost: (newPost) => { 
    return axios.post('/posts/new', { title: newPost })
},

createComment: function(/*this will need the id*/) {},

deleteComment: function(/*this will need the id*/) {}


}

module.exports = helper