import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';


class App extends Component {
  state = {
    bookList : []
  }
  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({bookList:json})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <BookList bookList={this.state.bookList} />
      </div>
    );
  }
}

export default App;
