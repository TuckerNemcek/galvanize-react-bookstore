import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import Book from './components/Book.js'

class App extends Component {

  state = {
    bookList : [],
    inCart : []
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({bookList:json})
    // console.log(this.state)
  }

  cartAdd(book) {
   let newState = {...this.state,inCart:[...this.state.inCart,book]}
   this.setState(newState)
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <BookList bookList={this.state.bookList}
        cartAdd={this.cartAdd.bind(this)}
        inCart={this.state.inCart} />
      </div>
    );
  }
}

export default App;
