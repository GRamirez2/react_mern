const axios = require('axios')



const helper = {

getPosts: () => {},

createPost: (newPost) => { 
    return axios.post('/news/post', { title: newPost })
},

createComment: function(/*this will need the id*/) {},

deleteComment: function(/*this will need the id*/) {}


}

module.exports = helper