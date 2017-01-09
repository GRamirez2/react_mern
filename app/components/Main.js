import React, { Component } from 'react'

import helper from './utils/helpers'

export default class Main extends Component {
	constructor(){
		super()
		this.state = {
			post: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		this.setState({ post: e.target.value })
	}

	handleSubmit(e){
		e.preventDefault()
		// let createNewPost = document.querySelector('#createNewPost').value
		//let createNewPost = e.target.value
		helper.createPost(this.state.post).then(function(){
			console.log("New Post Sent to DB")
		}.bind(this));
	}

	render() {
		console.log("on main.js");//tobe removed
		return (
			<div className="container">
	      <div className="jumbotron">
	        <h2><strong>Reddit!</strong></h2>
	      </div>

				<div>
						<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="createNewPost">Create New Post</label>
									<input value={this.state.post} onChange={this.handleChange} type="text" className="form-control" id="createNewPost" placeholder="New Post Topic" />
								</div>
						</form>
						<hr />
				</div>

	      <div className="row">
	        {/* This code will dump the correct Child Component */}
	        {this.props.children}
	      </div>
	    </div>
		);
	}
}
