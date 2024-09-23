// Write your JS code here
import {Component} from 'react'

import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    return (
      <div className="Item-Container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="table-Container">
          <div className="table-heading-Container">
            <p className="tabel-heading">Coin Type</p>
            <div className="currency-Container">
              <p className="tabel-heading">USD</p>
              <p className="tabel-heading">EURO</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CryptocurrencyItem
