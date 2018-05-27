import * as React from 'react';
import Button from '../components/Button'
export default class Purchase extends React.Component {
  render() {
    return (
      <div style={{maxWidth: '600px', margin: 'auto'}} className="padded-area">
        <h2>Purchase the Plastic Coin</h2>
        <p>
          Pay with Plastic with plastic or crypto.
        </p>
        <p>
          The PLAS coin is the currency on the renew platform. It allows you
          to purchase goods from any of the merchants on the platform as well as 
          trade it on several exchanges
        </p>
        <br />
        <br />
        <br />

        <h2> Purchase 1000 PLAS Coin for 1,300 PHP</h2>
        <p>
          Current trading price is 1.3PHP per PLAS
        </p>
        <Button>
          Purchase
        </Button>

        <br />
        <br />

        <h2> Purchase 1000 PLAS Coin for 0.0023 BTC</h2>
        <p>
          Current trading price is .0000023BTC per PLAS
        </p>
        <Button>
          Purchase
        </Button>
        <br />
        <br />

        <h2> Purchase 1000 PLAS Coin for 0.342 ETH</h2>
        <p>
          Current trading price is .000342ETH per PLAS
        </p>
        <Button>
          Purchase
        </Button>
      </div>
    )
  }
}