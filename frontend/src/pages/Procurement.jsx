import './pages_styles/Procurement.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProcurementItem from '../components/ProcurementItem';
import { addToCart } from '../actions/procurables';


class Procurement extends Component {
  static mapStoreToProps = (store, ownProps) => ({
    items: store.procurables
  })
  render() {
    const {items} = this.props
    return (
      <div className="procurement-container">
        {
          items.map((item, idx) => {
            return <ProcurementItem
              key={idx}
              name={item.name}
              description={item.description}
              onOrder={({ quantity }) => this.props.dispatch(addToCart(item, quantity))}
              imageURL={item.imageUrl} />
          })
        }
      </div>
    )
  }
}

export default connect(Procurement.mapStoreToProps)(Procurement)