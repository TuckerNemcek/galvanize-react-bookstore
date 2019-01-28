import React, {Component} from 'react'

class Item extends Component {
  render(){
    return(
      <tr>
      <th scope="row">{this.props.item.title}</th>
      <td>${this.props.item.price}.00</td>
      </tr>
    )
  }
}

export default Item
