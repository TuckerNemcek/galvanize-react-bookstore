import React , { Component} from 'react'

class Book extends Component {

  render (){
    return (
      <tr>
      <th scope="row">{this.props.book.id}</th>
      <td>{this.props.book.title}</td>
      <td>{this.props.book.author}</td>
      <td>{this.props.book.pages}</td>
      </tr>
    )
  }

}

export default Book
