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
        res.status(403).json({ status: 'failed', result: 'Invalid symbol' })
      }
    })
  }
}
