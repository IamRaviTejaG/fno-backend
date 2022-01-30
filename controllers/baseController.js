import axios from 'axios'
import path from 'path'
import redisClient from '../config/redis'

const constants = require('../config/constants')

export default {
  getList: (req, res) => {
    const type = req.params.type

    if (constants.LIST_ROUTE_KEYWORDS.INDEX.includes(type)) {
      res.status(200).json({ status: 'success', result: constants.SYMBOLS.INDICES })
    } else if (constants.LIST_ROUTE_KEYWORDS.EQUITY.includes(type)) {
      res.status(200).json({ status: 'success', result: constants.SYMBOLS.EQUITY })
    } else {
      res.status(200).json({ status: 'success', result: constants.SYMBOLS.ALL })
    }
  },

  getLotSize: (req, res) => {
    const symbol = req.params.symbol.toUpperCase()
    redisClient.hget(constants.REDIS_COLLECTIONS.LOTSIZE, symbol).then(result => {
      if (result) {
        res.status(200).json({ status: 'success', result: JSON.parse(result) })
      } else {
        res.status(400).json({ status: 'failed', result: 'Invalid symbol' })
      }
    })
  },

  getMarketStatus: (_req, res) => {
    const config = {
      method: 'get',
      url: constants.NSE_INDIA.MARKET_STATUS_URL
    }

    axios(config).then(response => {
      const data = response.data
      res.status(200).json({ status: 'success', marketStatus: data.marketState })
    }).catch(err => {
      if (err.response.status === 401) {
        res.status(401).json({ status: 'failure', symbol: symbol, result: 'Could not fetch market status' })
      } else {
        res.status(400).json({ status: 'failure', symbol: symbol, error: err })
      }
    })
  },

  home: (_req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../static/readme.html'))
  },

  index: (_req, res) => {
    res.status(200).json({ status: 'success', result: "There's only one way to go, Up Up & Up!" })
  }
}
