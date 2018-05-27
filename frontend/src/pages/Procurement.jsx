import './pages_styles/Procurement.css';
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actiontypes from '../actions/actiontypes';
import ProcurementItem from '../components/ProcurementItem';
import { addToCart, dispatchProducts } from '../actions/procurables';
import Button from '../components/Button'


class Procurement extends Component {
  constructor() {
    super()
    this.state = {
      selected: 0,
      categories: []
    }
  }
 
  static mapStoreToProps = (store, ownProps) => ({
    items: store.procurables
  })

  async componentWillMount() {
    const categories = await axios.get('/api/v1/category/all');
    this.setState({ categories: categories.data })
    if(categories.data.length)
      this.getProducts(categories.data[0]._id);
  } 

  getProducts = async (categ_id, i) => {
    const url = `/api/v1/productcategory?category=${categ_id}`
    const res = await axios.get(url) 
    const procurementItems = res.data

    this.props.dispatch(dispatchProducts(procurementItems))
    this.setState({selected: i})
  }

  getAllProducts = async () => {
    const url = `/api/v1/product`
    const res = await axios.get(url)
    const procurementItems = res.data

    this.props.dispatch(dispatchProducts(procurementItems))
    // this.setState({ selected: i })
  }

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
            Buy goods made from recycled materials 
          </span>
          <span>
            from all over the Philippines
          </span>
        </div>
        <div className="marketplace-main">
          <div className="add-item padded-area text-right">
            <Button to="/list">
              + List an Item
            </Button>
          </div>
          <div className="marketplace-list">
            <div className="marketplace-categories">
            <div className="marketplace-category" onClick={this.getAllProducts}>
              All
            </div>
              {this.state.categories.map((category, i) => {
                return(
                  <div 
                    key={category._id}
                    className={"marketplace-category" + (this.state.selected === i ? ' active' : '')}
                    onClick={() => this.getProducts(category._id, i)}
                    >
                    {category.name}
                  </div>
                )
              })}
            </div>
            <div className="marketplace-items padded-area">
              {
                items.map((item, idx) => {
                  return <ProcurementItem
                    key={idx}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    onOrder={({ quantity }) => this.props.dispatch(addToCart(item, quantity))}
                    imageURL={item.image_url} />
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