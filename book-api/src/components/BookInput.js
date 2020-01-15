import React from 'react';
import axios from 'axios';

export default class BookInput extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            title: '',
            author: '',
            genre: ''
        }
    }
    
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3000/books', this.state)
            .then(res => {
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            })
    }

    render() {
        const {title, author, genre} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Title
                            <input 
                                type="text" 
                                name="title" 
                                value={title} 
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Author
                            <input 
                                type="text" 
                                name="author" 
                                value={author} 
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Genre
                            <input 
                                type="text" 
                                name="genre" 
                                value={genre} 
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <button type="submit">POST</button>
                </form>
            </div>
        )
    }
}