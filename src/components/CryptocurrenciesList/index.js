import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    const updatedCurrencyList = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({currencyList: updatedCurrencyList, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
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
              <ul className="list-Container">
                {currencyList.map(currency => (
                  <CryptocurrencyItem key={currency.id} currency={currency} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
