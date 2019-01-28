import React , { Component} from 'react'
import BookList from './BookList'
import Item from './Item'

class InCheckout extends Component {


  render (){
    let total = 0
    return (
    <div>
      <h1>Checkout</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          {this.props.inCart.map((item,i) => {
            {console.log(item)}
            return (
              <Item key={i} item={item} />
            )
          })
          }
            <tr>
            <td>Total: ${this.props.calcTotal()}.00  </td>
            </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

export default InCheckout
