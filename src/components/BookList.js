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
                console.log(book)
                return (
                  <Book book= {book}/>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="col-4">
        cart goes here
        </div>
      </div>
    </div>



  )
}}
export default BookList
