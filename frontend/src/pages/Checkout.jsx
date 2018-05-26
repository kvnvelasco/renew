
import * as React from 'react';
import {connect} from 'react-redux'
import Button from '../components/Button'
class Cart extends React.Component {

  static mapStoreToProps = (store, ownProps) => ({
    items: store.cart.selectedItems
  })
  render() {
    const { items } = this.props
    return (
      <div className="cart--wrapper">
        <div className="cart--inner">
          <h4>Your Cart</h4>
          {items.map(item => (
            <div>
              {item.quantity}x {item.item.name}
            </div>
          ))}

          <Button>
            Schedule Delivery
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(Cart.mapStoreToProps)(Cart)