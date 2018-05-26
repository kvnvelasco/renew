import React, { Component } from 'react';
import './pages_styles/Procurement.css';


const items = [
    {
        "imageUrl": "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/29365_XXX_v1.tif&wid=650&cvt=jpeg",
        "name": "Organizer / Container",
        "description": "Organizer for classroom supplies and materials",
        "secelted": false
    },
    {
        "imageUrl": "https://i.pinimg.com/736x/9c/0e/92/9c0e921b680f046087bf74ff21357f8a--weapons-guns-guns-and-ammo.jpg",
        "name": "Rail Gun",
        "description": "For unresponsive children",
        "secelted": false
    }
]
export default class Procurement extends Component {
    state = {
        selected: false,
        value: 1
    }

    renderItemCounter = () => {
        return (
            <div className="procurement">
                <button onClick={() => this.decrement()}className="decrement-btn">-</button>
                <input type="text" value={this.state.value} />
                <button onClick={() => this.increment()} className="increment-btn">+</button>
            </div>
        )
    }

    increment = () => {
        this.setState({ value: this.state.value + 1})
    }

    decrement = () => {
        if(this.state.value !== 1){
            this.setState({ value: this.state.value - 1})
        }
    }

    orderedItem = () => {
        this.setState({
            selected: true
        })
    }

    renderItems = () => {
        return items.map(items => {
            return (
                <div className="procurement-card">
                    <img className="procurement-image" src={items.imageUrl} />
                    <div className="procurement column-2">
                        <strong>{items.name}</strong> {items.description}
                    </div>
                    <div className="procurement column-3">
                        <div className="procurement">
                            { this.state.selected ? this.renderItemCounter() : null }
                            <div className="item-req">
                                <strong>10.6 vits / pc</strong>
                                <button className="order-btn" onClick={() => this.orderedItem()}><strong>Order</strong></button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="procurement-container">
                {this.renderItems()}
            </div>
        )
    }
}