import React, { Component } from 'react';

export default class ListItem extends Component {
	render() {
		return (
			<li>
				<h2>{this.props.topic.subredditId}</h2>
				<h2>{this.props.topic.title}</h2>
				<p>{this.props.topic.content}</p>
				<p>in a list on the ListItem component</p>
			</li>
		);
	}
}
