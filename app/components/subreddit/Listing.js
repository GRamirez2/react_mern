import React, { Component } from 'react';
import axios from 'axios';

import ListItem from './ListItem';
import helper from  '../utils/helpers';

export default class Listing extends Component {
	constructor() {
		super();

		this.state = {
			posts: [],
			topic: []
		}
	}

	// componentDidMount() {
	// 	//change this to have a helper
	// 	axios.get('/posts/by-subreddit/' + this.props.params.subredditId).then(posts => {
	// 		this.setState({ posts: posts.data });
	// 	});
	// }

	// componentWillReceiveProps(nextProps) {
	// 	if (this.props.params.subredditId !== nextProps.params.subredditId) {
	// 		axios.get('/posts/by-subreddit/' + nextProps.params.subredditId).then(posts => {
	// 			this.setState({ posts: posts.data });
	// 		});
	// 	}
	// }

		componentDidMount() {
		// change this to have a helper
		axios.get('/news/search/' + this.props.params.topic).then(posts => {
			this.setState({ posts: posts.data });
		});
		// console.log(this.state.posts.data) this is not working

		helper.getPosts().then(function(response){
			console.log("listing", response)
			this.setState( {topic: response.data.topic} )
		}.bind(this))
		
	}

		componentWillReceiveProps(nextProps) {
		if (this.props.params.topic !== nextProps.params.topic) {
			axios.get('/news/search/' + nextProps.params.topic).then(posts =>{
				this.setState({ posts: posts.data });
			});
		}
	}

	render() {
		return (
			<div>
				{this.props.posts}
				{this.state.topic}
				<ul>
					{this.state.posts.map(post => <ListItem key={post._id} post={post} />)}
				</ul>
			</div>
		);
	}
}
