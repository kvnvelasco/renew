import * as React from 'react';

export default class ProcurementItem extends React.Component {

  state = {
    selected: false,
    qty: 1,
  }

  increment = () => {
    this.setState({qty: this.state.qty + 1})
  }

  decrement = () => {
    this.setState({ qty: this.state.qty ? this.state.qty - 1 : 0 })
  }

  renderItemCounter = () => (
    <div className="procurement">
      <button onClick={() => this.decrement()} className="decrement-btn">-</button>
      <input type="text" value={this.state.qty} />
      <button onClick={() => this.increment()} className="increment-btn">+</button>
    </div>
  )

  orderedItem = () => {
    if (this.props.onOrder)
      this.props.onOrder({ id: this.props.id, quantity: this.state.qty });
  }

  render() {
    const {name, description, imageURL, price} = this.props
    return (
      <div className="procurement-card" onClick={() => this.orderedItem()}>
        <div className="procurement-image" style={{ backgroundImage: `url(${imageURL})`}} />
        <div className="price">1,200 PHP/pc </div>
        <div className="procurement column-2">
          <strong>{name}</strong>
        </div>
        <div className="procurement column-3">
          <div className="procurement">
            <div className="item-req">
            </div>
          </div>
        </div>
      </div>
    )
  }
}