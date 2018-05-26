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
    if (this.state.selected) {
      if (this.props.onOrder)
        this.props.onOrder({id: this.props.id, quantity: this.state.qty});
      this.setState({selected: false, qty: 1});
    } else {
      this.setState({ selected: true });
    }
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
              <strong>10.6 REN / pc</strong>
              <button className="btn btn-primary order-btn" onClick={() => this.orderedItem()}>
                <strong>{
                  this.state.selected
                    ? 'Confirm'
                    : 'Order'
                }</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}