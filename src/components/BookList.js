import React , {Component} from 'react'
import Book from './Book.js'
import InCheckout from './InCheckout.js'

class BookList extends Component {

  render() {
  return (
    <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Pages</th>
              </tr>
            </thead>
            <tbody>
              {this.props.bookList.map(book => {
                return (
                  <Book book= {book} cartAdd={this.props.cartAdd}/>
                )
              })}
            </tbody>
          </table>

    </div>



  )
}}
export default BookList
