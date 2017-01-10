import React, { Component } from 'react';

import axios from 'axios';
import ListItem from './ListItem';
//import helpers

export default class Listing extends Component {
	constructor() {
		super();

		this.state = {
			posts: []
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
		axios.get('/news/search/' + this.props.params.subredditId).then(posts => {
			this.setState({ posts: posts.data });
		});
		// console.log(this.props.params)
	}

		componentWillReceiveProps(nextProps) {
		if (this.props.params.subredditId !== nextProps.params.subredditId) {
			axios.get('/news/search/' + nextProps.params.subredditId).then(posts =>{
				this.setState({ posts: posts.data });
			});
		}
	}

	render() {
		return (
			<ul>
				{this.state.posts.map(post => <ListItem key={post._id} post={post} />)}
			</ul>
		);
	}
}
