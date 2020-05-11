import React from 'react';
import axios from 'axios';

export default class addForm extends React.Component{
    state = {
        title: "",
        category:"",
        description:""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    handleSubmit = e => {
        // e.preventDefault();
        const data = {
            title: this.state.title[0],
            category: this.state.category[0],
            description: this.state.description[0]
        }
        console.log(data);
        axios.post(`https://fullstack-book.ariefdfaltah.com/book/create?key=gandhi`,  data )
            .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
    
    render(){
        return(
            <div>
                {/* <form> */}
                    <label for="bookTitle">Book Title</label><br/>
                    <input type="text" name="title" id="bookTitle" placeholder="Enter Book Title" onChange={this.handleChange}/><br/>
                    <label for="bookCategory">Book Category</label><br/>
                    <input type="text" name="category" id="bookCategory" placeholder="Enter Book Category" onChange={this.handleChange}/><br/>
                    <label for="bookDesc">Book Description</label><br/>
                    <textarea type="text" name="description" id="bookDesc" placeholder="Enter Book Description" onChange={this.handleChange}></textarea><br/>
                    <button id="bookAddbtn" type="submit" onClick={this.handleSubmit}>Add Book</button>
                {/* </form> */}
            </div>
        );
    }
}