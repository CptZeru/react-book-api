import React from 'react';
import axios from 'axios';

export default class detailBook extends React.Component{
    render(){
        return(
            // <div>
                <div key={this.props.id}>
                    <h1>{this.props.title}</h1>
                    <h4>{this.props.category}</h4>
                    <p>{this.props.description}</p>
                </div>
            // {/* </div> */}
        );
    }
}