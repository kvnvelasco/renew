import React, { Component } from 'react';
import './pages_styles/Orders_pickups.css'

const pickupDates = ["30 May, 2018",
    "30 May, 2018"];

const deliveries = [{
    orders: [{
        qty: 30,
        name: "pencil"
    }, {
        qty: 10,
        name: "Monoblock Chair/s"
    },
    {
        qty: 10,
        name: "10L Water Container"
    }],
    date: "30 May, 2018"
}, {
    orders: [{
        qty: 20,
        name: "pencil"
    }, {
        qty: 1,
        name: "Monoblock Chair/s"
    },
    {
        qty: 4,
        name: "10L Water Container"
    }],
    date: "15 June, 2018"
},]

export default class OrdersPickups extends Component {

    renderPickups = (date,idx) => {
        // const today = new Date().setHours(0, 0, 0, 0)
        
            // if (today > parseInt(date))
            //     return null;
            // else {
            return (
                <div key={idx} className="pickup-card">
                    <div className="label-pickup">Scheduled Pickup</div>
                    <div className="pickup-info">
                        <div className="date pick-up">{date}</div>
                        {/* <div className="resched-cancel">
                            <button>Reschedule</button>
                            <button>Cancel</button>
                        </div> */}
                    </div>
                </div>
            )
            // }
        
    }

    renderDeliveries = (delivery,idx) => {
        // const today = new Date().setHours(0, 0, 0, 0)
            // if(today>parseInt(delivery.date))
            //     return null;
            // else{
            return (
                <div key={idx} className="delivery-card">
                    <div className="delivery-content">
                        <div className="delivery-orders">
                            <div className="delivery">
                                Delivery
                                <div className="date deliver">{delivery.date}</div>
                            </div>
                            {
                                delivery.orders.map((order) => <div className="orders">{order.qty}x {order.name}</div>)
                            }
                            {/* <div className="orders">10x pencil</div> */}
                        </div>
                    </div>
                    {/* <div className="resched-cancel">
                        <button>Add/Edit Order</button>
                        <button>Reschedule</button>
                        <button>Cancel</button>
                    </div> */}
                </div>
            )
            // }
    }

    render() {
        return (
            <div className="orders-pickups-container">
                <div className="pickup-column">
                    <span>Upcoming Pickups</span>
                    <div>{pickupDates.map((date, idx) => this.renderPickups(date,idx))}</div>
                </div>

                <div className="delivery-column" >
                    <span>Upcoming Deliveries</span>
                    <div>{deliveries.map((delivery, idx) => this.renderDeliveries(delivery,idx))}</div>
                </div>
            </div>
        )
    }
}