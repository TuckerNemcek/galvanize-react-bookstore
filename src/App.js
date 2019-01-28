import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar.js';
import Book from './components/Book.js'
import InCheckout from './components/InCheckout.js'


class App extends Component {

  state = {
    bookList : [],
    inCart : [],
    searchString : ""
  }

  async componentDidMount(){
    const response = await fetch("http://localhost:8082/api/books")
    const json = await response.json()
    this.setState({bookList:json})
    // console.log(this.state)
  }



  render() {

    const cartAdd  = (book) => {
      let newState = {...this.state,inCart:[...this.state.inCart,book]}
      this.setState(newState)
    }

    const calcTotal = () =>{
      let total = 0
      this.state.inCart.forEach(item => {
        total += item.price
      })
      return total
    }

    const titleSort = (input) => {
      let titleSorted = { ...this.state,
        bookList:this.state.bookList.filter(book => book.title.includes(input))
      }
      this.setState(titleSorted)
    }

    const authorSort = (input) => {
      let authorSorted = { ...this.state,
        bookList:this.state.bookList.filter(book => book.author.includes(input))
      }
      this.setState(authorSorted)
    }

    return (
      <div>
        <SearchBar
        titleSort={titleSort}
        authorSort={authorSort}
        />
        <div className ="row">
          <div className ="col-8">
            <BookList
              bookList={this.state.bookList}
              cartAdd={cartAdd}
            />
          </div>
          <div className="col-4">
            <InCheckout
              inCart={this.state.inCart}
              calcTotal={calcTotal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
