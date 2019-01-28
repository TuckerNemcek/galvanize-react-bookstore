import React , { Component} from 'react'
import BookList from './BookList'


class Book extends Component {


  render (){

    return (
      <tr>
      <th scope="row" id={this.props.book.id}>{this.props.book.id}</th>
      <td>{this.props.book.title}</td>
      <td>{this.props.book.author}</td>
      <td>{this.props.book.pages}<button type="button" className="cartAdd" onClick ={(e)=>{this.props.cartAdd(this.props.book)}}>Add to Cart</button></td>
      </tr>
    )
  }
}

export default Book
