import axios from 'axios'
import constants from '../config/constants'

export default {
  getOptionChain: (req, res) => {
    const symbol = req.params.symbol.toUpperCase()
    let baseUrl = ''
    if (constants.SYMBOLS.INDICES.includes(symbol)) {
      baseUrl = constants.NSE_INDIA.INDICES_DATA_URL
    } else if (constants.SYMBOLS.EQUITY.includes(symbol)) {
      baseUrl = constants.NSE_INDIA.EQUITY_DATA_URL
    } else {
      res.status(400).json({ status: 'failure', result: 'Invalid symbol' })
    }

    const config = {
      method: 'get',
      url: `${baseUrl}${symbol}`,
      headers: constants.NSE_INDIA.REQUEST_HEADERS
    }

    axios(config).then(response => {
      const data = response.data
      const returnedData = {
        status: 'success',
        symbol: symbol,
        timestamp: data.records.timestamp,
        underlyingValue: data.records.underlyingValue,
        filteredOptionChain: data.filtered.data,
        filteredStrikePrices: data.filtered.data.map(a => a.strikePrice)
      }
      res.status(200).json(returnedData)
    }).catch(err => {
      if (err.response.status === 401) {
        res.status(401).json({ status: 'failure', symbol: symbol, result: 'Could not fetch option chain' })
      } else {
        res.status(400).json({ status: 'failure', symbol: symbol, error: err })
      }
    })
  }
}
