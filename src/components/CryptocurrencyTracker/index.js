// Write your code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="app-Container">
        <CryptocurrencyItem />
      </div>
    )
  }
}

export default CryptocurrencyTracker
