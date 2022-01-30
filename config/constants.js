import fs from 'fs'

let allSymbols = fs.readFileSync('./static/list.txt', {encoding:'utf8', flag:'r'}).split(',')

module.exports = {
  NIFTY_TRADER: {
    OI_DATA_URL: 'https://api.niftytrader.in/webapi/Option/getOiData',
    OI_CHANGE_DATA_URL: 'https://api.niftytrader.in/webapi/Option/getOiChangeData',
    NIFTY_OI_LIST_REQUEST_DATA: {
      reqType: 'niftyoilist',
      reqDate: ''
    },
    BANK_NIFTY_OI_LIST_REQUEST_DATA: {
      reqType: 'bankniftyoi',
      reqDate: ''
    },
    FIN_NIFTY_OI_LIST_REQUEST_DATA: {
      reqType: 'finniftyoilist',
      reqDate: ''
    },
    NIFTY_OI_CHANGE_REQUEST_DATA: {
      reqType: 'niftyoichange',
      reqDate: ''
    },
    BANK_NIFTY_OI_CHANGE_REQUEST_DATA: {
      reqType: 'bankniftyoichange',
      reqDate: ''
    },
    FIN_NIFTY_OI_CHANGE_REQUEST_DATA: {
      reqType: 'finniftyoichange',
      reqDate: ''
    },
    REQUEST_HEADERS: {
      authority: 'api.niftytrader.in',
      accept: 'application/json, text/plain, */*',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxODIxMjYiLCJqdGkiOiIwMTY2NTNiMS0wMWZlLTQ5OGYtOGQyNi03NDFlZTQ5NmIwZWEiLCJleHAiOjE2NDQ3MjM3MzAsImlzcyI6Ik5pZnR5dHJhZGVyaGVscC5jb20iLCJhdWQiOiJOaWZ0eXRyYWRlcmhlbHAuY29tIn0.tHSaU8B_h6mZsbMR0d2sOZHqoonW11uaslwK7p3Gb9Y',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
      'content-type': 'application/json',
      'sec-gpc': '1',
      origin: 'https://www.niftytrader.in',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      referer: 'https://www.niftytrader.in/',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8'
    }
  },
  NSE_INDIA: {
    MARKET_STATUS_URL: 'https://www.nseindia.com/api/marketStatus',
    INDICES_DATA_URL: 'https://www.nseindia.com/api/option-chain-indices?symbol=',
    EQUITY_DATA_URL: 'https://www.nseindia.com/api/option-chain-equities?symbol=',
    REQUEST_HEADERS: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:95.0) Gecko/20100101 Firefox/95.0',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
      DNT: '1',
      Connection: 'keep-alive',
      Cookie: 'AKA_A2=A; ak_bmsc=3F38CFDB0BBBEEBC9E15689D422A7EE4~000000000000000000000000000000~YAAQjHMsMSecvXt+AQAAXwrJqQ7dR7RS7Lhp2xfS9rvGJmvyAs+0dlY88rTXHu+UFCTPJVfLF/fUTigiVF9zhAf4CpmYh48RzDzHqKlZSv9ZP62yX6haukTLYGEIsksu5Z8jlHlhdXPt3ailXEf6h4F5Fuuix49WShz2Ll860Sg5eUPh/riAyipfVG1sfhyX6pSgLrJYwrynYjaAHEa2R6Lg9GmcWmarWJ4zqwIHRq0MHyFJqD1+aSQwZC2xqT7xO6Ggl+95NF52cid9NcVGG+iePz1mtMNyfbelwDOnYbmaWDpwTD4ukoYWgo3dRJlGB/Ij0hTY7yCje0pf0tOmo+mNHSyAmy/h1o9TN460VXbO3zh1K82kGi1WpIiRb2evOHARen6/e/UF/w==',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Cache-Control': 'max-age=0',
      TE: 'trailers'
    }
  },
  SYMBOLS: {
    INDICES: allSymbols.filter(x =>  x.includes('NIFTY')),
    EQUITY: allSymbols.filter(x => !x.includes('NIFTY')),
    ALL: allSymbols
  },
  LIST_ROUTE_KEYWORDS: {
    INDEX: ['index', 'indices'],
    EQUITY: ['stock', 'stocks', 'equity', 'equities']
  },
  INVALID_LOTSIZE_ROUTE_KEYWORDS: [null, undefined, '', 'UNDERLYING', 'SYMBOL'],
  REDIS_COLLECTIONS: {
    LOTSIZE: 'LOTSIZE'
  }
}
