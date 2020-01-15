import React from 'react';
import axios from 'axios';

export default class BookList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/books')
            .then(res => {
            this.setState({books: res.data});
            })
            .catch(err =>{
                console.log(err);
            })
    }

    render() {
        const { books } = this.state
        return (
            <div>
                <h2>List of Books</h2>
                {
                    books.length ?
                    books.map(book => <div key={book.id}>{book.title}</div>) :
                    null
                }
            </div>
        )
    }
}