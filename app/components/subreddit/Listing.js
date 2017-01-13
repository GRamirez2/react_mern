import React, { Component } from 'react';
import axios from 'axios';

import ListItem from './ListItem';
import helper from  '../utils/helpers';

export default class Listing extends Component {
	constructor(props) {
		super(props);

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
		axios.get('/news/search/' + this.props.topic).then(posts => {
			this.setState({ topic: posts.data });
		});
		

		helper.getPosts().then(function(response){
			console.log("listing", response)
			this.setState( {topic: response.data} );
			console.log("state.topic", this.state.topic)
		}.bind(this))
		
	}

		componentWillReceiveProps(nextProps) {
		if (this.props.topic !== nextProps.topic) {
			axios.get('/news/search/' + nextProps.topic).then(posts =>{
				this.setState({ topic: posts.data });
			});
		}
	}

	render() {
		return (
			<div>
				<h2>A list of Topics to read and comment on (Listing)</h2>
				<ul>
					
					{this.state.topic.map((topic1) => <ListItem key={topic1._id} topic={topic1} />)}
					
				</ul>
			</div>
		);
	}
}
