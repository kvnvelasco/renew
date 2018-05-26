import React, { Component } from 'react';
import './pages_styles/Procurement.css';
import ProcurementItem from '../components/ProcurementItem'

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
 
    render() {
        return (
            <div className="procurement-container">
                {
                  items.map(item => {
                    return <ProcurementItem name={item.name} description={item.description} imageURL={item.imageUrl}/>
                  })
                }
            </div>
        )
    }
}