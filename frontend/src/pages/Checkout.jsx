
import * as React from 'react';
import { connect } from 'react-redux'
import Button from '../components/Button'
import './pages_styles/Checkout.css'
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
          {items.length ?
            <div className="items-list">
              {items.map(item => (
                <div style={{ marginBottom: '10px' }}>
                  {item.quantity}x {item.item.name}
                </div>
              ))}
            </div>
            : null}
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button>
            Schedule Delivery
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(Cart.mapStoreToProps)(Cart)