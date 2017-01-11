import React, { Component } from 'react';

export default class ListItem extends Component {
	render() {
		return (
			<li>
				<h2>{this.props.topic.topic}</h2>
				<p>{this.props.topic.title}</p>
				<p>{this.props.topic.snippet}</p>
				
			</li>
		);
	}
}
