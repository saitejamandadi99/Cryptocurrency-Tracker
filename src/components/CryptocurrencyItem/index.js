import './index.css'

const CryptocurrencyItem = props => {
  const {currency} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = currency

  return (
    <li className="listEle">
      <div className="image-heading-Container">
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>

      <div className="currencyContainer">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
