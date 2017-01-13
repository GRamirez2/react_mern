import React, { Component } from 'react';


export default class Comments extends Component {
    constructor(props){
        super(props);

        this.state={}
    }
    

    render(){
        return (
            <div>

                <h1>Comment Page</h1>
                <h2>{this.props.params.topic}</h2>
          
            </div>
        )
      }
    }



