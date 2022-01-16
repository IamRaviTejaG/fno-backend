import axios from 'axios'
import constants from '../config/constants'

const getNiftyLiveOi = (res) => {
  const config = {
    method: 'post',
    url: constants.NIFTY_TRADER.OI_DATA_URL,
    headers: constants.NIFTY_TRADER.REQUEST_HEADERS,
    data: constants.NIFTY_TRADER.NIFTY_OI_LIST_REQUEST_DATA
  }

  axios(config).then(response => {
    res.status(200).json(response.data)
  })
}

const getBankNiftyLiveOi = (res) => {
  const config = {
    method: 'post',
    url: constants.NIFTY_TRADER.OI_DATA_URL,
    headers: constants.NIFTY_TRADER.REQUEST_HEADERS,
    data: constants.NIFTY_TRADER.BANK_NIFTY_OI_LIST_REQUEST_DATA
  }

  axios(config).then(response => {
    res.status(200).json(response.data)
  })
}

const getFinNiftyLiveOi = (res) => {
  const config = {
    method: 'post',
    url: constants.NIFTY_TRADER.OI_DATA_URL,
    headers: constants.NIFTY_TRADER.REQUEST_HEADERS,
    data: constants.NIFTY_TRADER.FIN_NIFTY_OI_LIST_REQUEST_DATA
  }

  axios(config).then(response => {
    res.status(200).json(response.data)
  })
}

const getNiftyOiChange = (res) => {
  const config = {
    method: 'post',
    url: constants.NIFTY_TRADER.OI_CHANGE_DATA_URL,
    headers: constants.NIFTY_TRADER.REQUEST_HEADERS,
    data: constants.NIFTY_TRADER.NIFTY_OI_CHANGE_REQUEST_DATA
  }

  axios(config).then(response => {
    res.status(200).json(response.data)
  })
}

const getBankNiftyOiChange = (res) => {
  const config = {
    method: 'post',
    url: constants.NIFTY_TRADER.OI_CHANGE_DATA_URL,
    headers: constants.NIFTY_TRADER.REQUEST_HEADERS,
    data: constants.NIFTY_TRADER.BANK_NIFTY_OI_CHANGE_REQUEST_DATA
  }

  axios(config).then(response => {
    res.status(200).json(response.data)
  })
}

const getFinNiftyOiChange = (res) => {
  const config = {
    method: 'post',
    url: constants.NIFTY_TRADER.OI_CHANGE_DATA_URL,
    headers: constants.NIFTY_TRADER.REQUEST_HEADERS,
    data: constants.NIFTY_TRADER.FIN_NIFTY_OI_CHANGE_REQUEST_DATA
  }

  axios(config).then(response => {
    res.status(200).json(response.data)
  })
}

const getLiveOi = (res, symbol) => {
  switch (symbol) {
    case 'NIFTY':
      getNiftyLiveOi(res)
      break
    case 'BANKNIFTY':
      getBankNiftyLiveOi(res)
      break
    case 'FINNIFTY':
      getFinNiftyLiveOi(res)
      break
    default:
      res.status(400).json({ status: 'failure', result: 'Invalid symbol' })
      break
  }
}

const getChangeInOi = (res, symbol) => {
  switch (symbol) {
    case 'NIFTY':
      getNiftyOiChange(res)
      break
    case 'BANKNIFTY':
      getBankNiftyOiChange(res)
      break
    case 'FINNIFTY':
      getFinNiftyOiChange(res)
      break
    default:
      res.status(400).json({ status: 'failure', result: 'Invalid symbol' })
      break
  }
}

export default {
  getLiveOi: (req, res) => {
    const symbol = req.params.symbol.toUpperCase()

    if (!constants.SYMBOLS.INDICES.includes(symbol)) {
      res.status(400).json({ status: 'failure', result: 'Invalid symbol' })
    } else {
      getLiveOi(res, symbol)
    }
  },

  getOiChange: (req, res) => {
    const symbol = req.params.symbol.toUpperCase()

    if (!constants.SYMBOLS.INDICES.includes(symbol)) {
      res.status(400).json({ status: 'failure', result: 'Invalid symbol' })
    } else {
      getChangeInOi(res, symbol)
    }
  }
}
