import csv from 'csvtojson'
import fs from 'fs'
import request from 'request'
import redisClient from '../config/redis'

const constants = require('../config/constants')
let allSymbols = fs.readFileSync('./static/list.txt', {encoding:'utf8', flag:'r'}).split(',')
let listCount = allSymbols.length
let count = 0

csv().fromStream(request.get('https://www1.nseindia.com/content/fo/fo_mktlots.csv')).subscribe(row => {
  const symbol = row.SYMBOL
  const lotSizes = []
  delete row.SYMBOL
  delete row.UNDERLYING

  Object.keys(row).forEach(k => {
    if (!constants.INVALID_LOTSIZE_ROUTE_KEYWORDS.includes(row[k])) {
      lotSizes.push({ expiry: k, lotSize: row[k] })
    }
  })

  redisClient.hset(constants.REDIS_COLLECTIONS.LOTSIZE, symbol, JSON.stringify(lotSizes)).then(_res => {
    console.log(`Lot size data successfully loaded into Redis for symbol: ${symbol}`)
    ++count

    if (count === listCount) {
      console.log(`Loaded all lot size data into Redis successfully! Count: ${count}.\nExiting...`)
      process.exit(0)
    }
  }).catch(err => {
    console.log(`Error loading lot size data into Redis. ${err}`)
    process.exit(1)
  })
})
