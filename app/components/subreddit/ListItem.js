import React, { Component } from 'react';
import { Link } from 'react-router';


export default class ListItem extends Component {
	render() {
		return (

				<li>
					
					<Link
					key={this.props.topic._id}
					to={`/find/${this.props.topic.topic}`}
					>
					<h1>{this.props.topic.topic}</h1>
					</Link>
					<p>{this.props.topic.snippet}</p>
					
				</li>

		);
	}
}
