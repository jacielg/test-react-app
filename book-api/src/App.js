import React from 'react';
import logo from './logo.svg';
import './App.css';

import BookList from './components/BookList'
import BookInput from './components/BookInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BookInput />
      <BookList />
    </div>
  );
}


export default App;
