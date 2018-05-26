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
    this.setState({selected: true})
  }

  render() {
    const {name, description, imageURL} = this.props
    return (
      <div className="procurement-card">
        <img className="procurement-image" src={imageURL} />
        <div className="procurement column-2">
          <strong>{name}</strong> {description}
        </div>
        <div className="procurement column-3">
          <div className="procurement">
            {this.state.selected ? this.renderItemCounter() : null}
            <div className="item-req">
              <strong>10.6 vits / pc</strong>
              <button className="order-btn" onClick={() => this.orderedItem()}><strong>Order</strong></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}