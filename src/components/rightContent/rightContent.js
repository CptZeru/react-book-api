import React from 'react';
import axios from 'axios';
import './rightContent-styles.css';
import Modal from '../Modal/Modal';
import DetailBook from '../bookDetail/index';
// import { fetchBookList } from '../Action/action'

class RightContent extends React.Component {
    state = {
        book:[],
        books: [],
        targetId: 0,
        show: false,
        title: "",
        content: <div></div>
    }
    showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
    showDetail = e => {
        axios.get(`https://fullstack-book.ariefdfaltah.com/book/detail/${e.target.name}?key=gandhi`)
        .then(res => {
            const book = res.data.data;
            this.setState({ book });
          })
        this.setState({
            title: "Book Detail",
            content: <DetailBook id={this.state.book.id} title={this.state.book.title} category={this.state.book.category} description={this.state.book.description}/>            
        })
        this.showModal();
    }
    componentDidMount(){
        // this.props.fetchBookList();
        axios.get("https://fullstack-book.ariefdfaltah.com/book/list?key=gandhi&sort_by=category&sort_order=desc")
        .then(res => {
            const books = res.data.data;
            this.setState({ books });
          })        
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name);
        axios.get(`https://fullstack-book.ariefdfaltah.com/book/delete/${e.target.name}?key=gandhi`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render(){
        // console.log(this.props.data);
        return(
            <div className="split right">
                <Modal onClose={this.showModal} show={this.state.show} title={this.state.title}>
                        {this.state.content}
                </Modal>
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
                                <td><h3><a href="#" name={book.id} onClick={
                                this.showDetail
                                }>Detail</a> | <a href="#" name={book.id} onClick={this.handleSubmit}>Delete</a></h3></td>
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