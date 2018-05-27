import './pages_styles/Procurement.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProcurementItem from '../components/ProcurementItem';
import { addToCart } from '../actions/procurables';
import Button from '../components/Button'

class Procurement extends Component {
  static mapStoreToProps = (store, ownProps) => ({
    items: store.procurables
  })
  render() {
    const {items} = this.props
    return (
      <div className="procurement-container">
        <div 
          style={{ backgroundImage: `url(${require('../pictures/marketplace_bg.png')})`}} 
          className="marketplace-bg"
        >
          <h2 className="white">Marketplace</h2>
          <span>
            Buy goods made from recycled materials on the 
          </span>
          <span>
            marketplace with credits you’ve earned.
          </span>
        </div>
        <div className="marketplace-main">
          <div className="add-item padded-area text-right">
            <Button>
              + List an Item
            </Button>
          </div>
          <div className="marketplace-list">
            <div className="marketplace-categories">
              <div className="marketplace-category no-select">
                Categories
              </div>
              <div className="marketplace-category active">
                Household Goods
              </div>
              <div className="marketplace-category">
                School Supplies
              </div>
              <div className="marketplace-category">
                Construction Materials
              </div>
              <div className="marketplace-category">
                3D Printer Fillament
              </div>
              <div className="marketplace-category">
                Raw Plastic
              </div>
              <div className="marketplace-category">
                Art
              </div>
            </div>
            <div className="marketplace-items padded-area">
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
          </div>
        </div>
        
      </div>
    )
  }
}

export default connect(Procurement.mapStoreToProps)(Procurement)