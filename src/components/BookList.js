import React , {Component} from 'react'
import Book from './Book.js'

class BookList extends Component {
  render() {
  return (
    <div>
      <div className="row">
        <div className="col-8">
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
        <div className="col-4">
        <h1>Checkout</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>        </div>
      </div>
    </div>



  )
}}
export default BookList
