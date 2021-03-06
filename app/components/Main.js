import React, { Component } from 'react'

import helper from './utils/helpers'

import Listing from './subreddit/Listing'
// import ListItem from './subreddit/ListItem'

export default class Main extends Component {
	constructor(){
		super()
		this.state = {
			topic: "",
			snippet: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		var newState = {};
		newState[e.target.id] = e.target.value;
    this.setState(newState);

	}

	handleSubmit(e){
		e.preventDefault()
		helper.createPost(this.state.topic, this.state.snippet).then(function(){
			console.log("New Post Sent to DB")
		}.bind(this));
		this.setState({
			topic: "",
			snippet: ""
		})
	}

	render() {
		// console.log(this.props.children)
		return (
			<div className="container">
	      <div className="jumbotron">
	        <h2><strong>Reddit!</strong></h2>
	      </div>

				<div>
						<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="createNewTopic">Create New Topic</label>
									<input value={this.state.topic} onChange={this.handleChange} type="text" className="form-control" id="topic" placeholder="New Post Topic" />
								</div>

								<div className="form-group">
									<label htmlFor="createNewSnippet">Your Topic's Snippet</label>
									<input value={this.state.snippet} onChange={this.handleChange} type="text" className="form-control" id="snippet" placeholder="i.e., More evidence that Donald Trump is an idiot" />
								</div>

								<div className="text-right">
								<button className="btn btn-primary" type="submit">
                    Submit
                </button>
								</div>

						</form>
						<hr />
				</div>

	      <div className="row">
					
					<p>From Main component, this is state.post => {this.state.post}</p>
					
					<Listing /> 
					{/* This code will dump the correct Child Component */}
	        {/* {this.props.children} */}
	      </div>
	    </div>
		);
	}
}
