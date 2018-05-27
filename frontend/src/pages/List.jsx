import * as React from 'react';

export default class List extends React.Component {
  render () {
    return (
      <div className="padded-area">
        <h3>List an item on Renew</h3>
        <p>
          Your listing will be available on the platform immediately after 
          publishing it
        </p>

        <br />
        <br />

        <div className="padded-area">
          <input placeholder="Item Name" />
          <input placeholder="image (url only)" />
          <input placeholder="Amount Available" />
        </div>

        <select>
          <option>Household Goods</option>

        </select>

        

        <div className="padded-area">
          <textarea placeholder="Item Description" style={{width: '600px'}}></textarea>
        </div>

      </div>
    )
  }
}