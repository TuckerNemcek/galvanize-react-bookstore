import React , { Component} from 'react'


class InCheckout extends Component {

  render (){
    return (
      <tr>
        <th scope="row" id={this.props.item.id}>{this.props.item.title}</th>
        <td>{this.props.item.price}</td>
      </tr>
    )
  }
}

export default InCheckout
