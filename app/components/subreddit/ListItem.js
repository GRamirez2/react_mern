import React, { Component } from 'react';

export default class ListItem extends Component {
	render() {
		return (
			<li>
				<h2>{this.props.post.subredditId}</h2>
				<h2>{this.props.post.title}</h2>
				<p>{this.props.post.content}</p>
			</li>
		);
	}
}
