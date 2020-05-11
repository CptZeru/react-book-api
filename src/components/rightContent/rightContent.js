import React from 'react';
import axios from 'axios';
import './rightContent-styles.css';
import { fetchBookList } from '../Action/action'

class RightContent extends React.Component {
    state = {
        books: []
    }
    componentDidMount(){
        // this.props.fetchBookList();
        axios.get("https://fullstack-book.ariefdfaltah.com/book/list?key=gandhi&sort_by=category&sort_order=desc")
        .then(res => {
            const books = res.data.data;
            this.setState({ books });
          })        
    }
    render(){
        // console.log(this.props.data);
        return(
            <div className="split right">
                <table>
                    <tr id="booklist-header">
                        <th></th>
                        <th>
                            <h1>Book List</h1>
                        </th>
                        <th></th>
                        <th>
                            <a className="sort-btn" href=""><h1 className="text-right">SORT <i className="fa fa-sort"></i></h1></a>
                        </th>
                    </tr>
                    <tbody>
                        {this.state.books.map(book => 
                            <tr>
                                <td><h3>{book.id}</h3></td>
                                <td><h3>{book.title}</h3></td>
                                <td><h3>{book.category}</h3></td>
                                <td><h3><a href="#" key={book.id}>Detail</a> | <a href="#" key={book.id}>Delete</a></h3></td>
                            </tr>
                        )}
                        {/* {data.map(book => 
                            <tr key={book.id}>
                                <td><h3>{book.id}</h3></td>
                                <td><h3>{book.title}</h3></td>
                                <td><h3>{book.category}</h3></td>
                                <td><h3>a</h3></td>
                            </tr>
                        )} */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RightContent;