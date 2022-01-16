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
    INDICES_DATA_URL: 'https://www.nseindia.com/api/option-chain-indices?symbol=',
    EQUITY_DATA_URL: 'https://www.nseindia.com/api/option-chain-equities?symbol=',
    REQUEST_HEADERS: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:95.0) Gecko/20100101 Firefox/95.0',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
      DNT: '1',
      Connection: 'keep-alive',
      Cookie: 'nseQuoteSymbols=[{"symbol":"NIFTY","identifier":"OPTIDXNIFTY20-01-2022PE18200.00","type":"equity"},{"symbol":"BANKNIFTY","identifier":"OPTIDXBANKNIFTY20-01-2022CE38300.00","type":"equity"},{"symbol":"INFY","identifier":"OPTSTKINFY27-01-2022CE1940.00","type":"equity"}]; AKA_A2=A; ak_bmsc=2B139BC4619568DDD04B87702FB94E98~000000000000000000000000000000~YAAQjHMsMbyaBU9+AQAA+WzIYw4Yut3dBnU9t44QTTfSmqwzyWxjlSFpc6ceVHvWcT8pZIYjtjE4+80dtV0jPgQ9qapPlJgPcwVHfJYVc0svy/tj2ML0k27TZCNfNP1Q12Z1TWhMXn5hhooJm/IqP44rXwX3kkg0yHl740Und2s1fJ5m4+qOD5xyevtSbNj2267u+KT559kBnq+0UAeGXu014OK40JEeTw+BEI8LqaOhwLX7/zvMBYX2dk+BGABysAciv/QISID/xEkzceNXjCuAWT2HFGulSl1so2T2rdMzHai9kl12POokl4mF2/8pvYMcqKv7UenIS3nPXM+12dh6DgCzanfRperqWm7cJjYCwfouUXMh35eoROYUFZ+LIo22+yQpcHzu; bm_sv=B73EF64B8AED0B0A8D422BD49E11027B~3P9u9KlaOO8Bhe7EQks8vwgf3lmJF6LxnmmEtF2wlv7hL44BKF9kWnZIz5ecGFagNPlVrEp1lgwICkod37Gpg6TcDNu0fErG16cuE/gdqWbbRtPFt+fi2MgwpMmcYJkZP8e+3obEY7Wzg5b56PTerpKLQOG66AdyZLhkp6beq+s=',
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
    INDICES: ['NIFTY', 'BANKNIFTY', 'FINNIFTY'],
    EQUITY: ['AARTIIND', 'ABBOTINDIA', 'ABCAPITAL', 'ABFRL', 'ACC', 'ADANIENT', 'ADANIPORTS', 'ALKEM', 'AMARAJABAT', 'AMBUJACEM', 'APLLTD', 'APOLLOHOSP', 'APOLLOTYRE', 'ASHOKLEY', 'ASIANPAINT', 'ASTRAL', 'ATUL', 'AUBANK', 'AUROPHARMA', 'AXISBANK', 'BAJAJ-AUTO', 'BAJAJFINSV', 'BAJFINANCE', 'BALKRISIND', 'BALRAMCHIN', 'BANDHANBNK', 'BANKBARODA', 'BATAINDIA', 'BEL', 'BERGEPAINT', 'BHARATFORG', 'BHARTIARTL', 'BHEL', 'BIOCON', 'BOSCHLTD', 'BPCL', 'BRITANNIA', 'BSOFT', 'CADILAHC', 'CANBK', 'CANFINHOME', 'CHAMBLFERT', 'CHOLAFIN', 'CIPLA', 'COALINDIA', 'COFORGE', 'COLPAL', 'CONCOR', 'COROMANDEL', 'CROMPTON', 'CUB', 'CUMMINSIND', 'DABUR', 'DALBHARAT', 'DEEPAKNTR', 'DELTACORP', 'DIVISLAB', 'DIXON', 'DLF', 'DRREDDY', 'EICHERMOT', 'ESCORTS', 'EXIDEIND', 'FEDERALBNK', 'FSL', 'GAIL', 'GLENMARK', 'GMRINFRA', 'GNFC', 'GODREJCP', 'GODREJPROP', 'GRANULES', 'GRASIM', 'GSPL', 'GUJGASLTD', 'HAL', 'HAVELLS', 'HCLTECH', 'HDFC', 'HDFCAMC', 'HDFCBANK', 'HDFCLIFE', 'HEROMOTOCO', 'HINDALCO', 'HINDCOPPER', 'HINDPETRO', 'HINDUNILVR', 'HONAUT', 'IBULHSGFIN', 'ICICIBANK', 'ICICIGI', 'ICICIPRULI', 'IDEA', 'IDFC', 'IDFCFIRSTB', 'IEX', 'IGL', 'INDHOTEL', 'INDIACEM', 'INDIAMART', 'INDIGO', 'INDUSINDBK', 'INDUSTOWER', 'INFY', 'IOC', 'IPCALAB', 'IRCTC', 'ITC', 'JINDALSTEL', 'JKCEMENT', 'JSWSTEEL', 'JUBLFOOD', 'KOTAKBANK', 'L&TFH', 'LALPATHLAB', 'LAURUSLABS', 'LICHSGFIN', 'LT', 'LTI', 'LTTS', 'LUPIN', 'M&M', 'M&MFIN', 'MANAPPURAM', 'MARICO', 'MARUTI', 'MCDOWELL-N', 'MCX', 'METROPOLIS', 'MFSL', 'MGL', 'MINDTREE', 'MOTHERSUMI', 'MPHASIS', 'MRF', 'MUTHOOTFIN', 'NAM-INDIA', 'NATIONALUM', 'NAUKRI', 'NAVINFLUOR', 'NBCC', 'NESTLEIND', 'NMDC', 'NTPC', 'OBEROIRLTY', 'OFSS', 'ONGC', 'PAGEIND', 'PEL', 'PERSISTENT', 'PETRONET', 'PFC', 'PFIZER', 'PIDILITIND', 'PIIND', 'PNB', 'POLYCAB', 'POWERGRID', 'PVR', 'RAIN', 'RAMCOCEM', 'RBLBANK', 'RECLTD', 'RELIANCE', 'SAIL', 'SBICARD', 'SBILIFE', 'SBIN', 'SHREECEM', 'SIEMENS', 'SRF', 'SRTRANSFIN', 'STAR', 'SUNPHARMA', 'SUNTV', 'SYNGENE', 'TATACHEM', 'TATACOMM', 'TATACONSUM', 'TATAMOTORS', 'TATAPOWER', 'TATASTEEL', 'TCS', 'TECHM', 'TITAN', 'TORNTPHARM', 'TORNTPOWER', 'TRENT', 'TVSMOTOR', 'UBL', 'ULTRACEMCO', 'UPL', 'VEDL', 'VOLTAS', 'WHIRLPOOL', 'WIPRO', 'ZEEL'],
    ALL: ['NIFTY', 'BANKNIFTY', 'FINNIFTY', 'AARTIIND', 'ABBOTINDIA', 'ABCAPITAL', 'ABFRL', 'ACC', 'ADANIENT', 'ADANIPORTS', 'ALKEM', 'AMARAJABAT', 'AMBUJACEM', 'APLLTD', 'APOLLOHOSP', 'APOLLOTYRE', 'ASHOKLEY', 'ASIANPAINT', 'ASTRAL', 'ATUL', 'AUBANK', 'AUROPHARMA', 'AXISBANK', 'BAJAJ-AUTO', 'BAJAJFINSV', 'BAJFINANCE', 'BALKRISIND', 'BALRAMCHIN', 'BANDHANBNK', 'BANKBARODA', 'BATAINDIA', 'BEL', 'BERGEPAINT', 'BHARATFORG', 'BHARTIARTL', 'BHEL', 'BIOCON', 'BOSCHLTD', 'BPCL', 'BRITANNIA', 'BSOFT', 'CADILAHC', 'CANBK', 'CANFINHOME', 'CHAMBLFERT', 'CHOLAFIN', 'CIPLA', 'COALINDIA', 'COFORGE', 'COLPAL', 'CONCOR', 'COROMANDEL', 'CROMPTON', 'CUB', 'CUMMINSIND', 'DABUR', 'DALBHARAT', 'DEEPAKNTR', 'DELTACORP', 'DIVISLAB', 'DIXON', 'DLF', 'DRREDDY', 'EICHERMOT', 'ESCORTS', 'EXIDEIND', 'FEDERALBNK', 'FSL', 'GAIL', 'GLENMARK', 'GMRINFRA', 'GNFC', 'GODREJCP', 'GODREJPROP', 'GRANULES', 'GRASIM', 'GSPL', 'GUJGASLTD', 'HAL', 'HAVELLS', 'HCLTECH', 'HDFC', 'HDFCAMC', 'HDFCBANK', 'HDFCLIFE', 'HEROMOTOCO', 'HINDALCO', 'HINDCOPPER', 'HINDPETRO', 'HINDUNILVR', 'HONAUT', 'IBULHSGFIN', 'ICICIBANK', 'ICICIGI', 'ICICIPRULI', 'IDEA', 'IDFC', 'IDFCFIRSTB', 'IEX', 'IGL', 'INDHOTEL', 'INDIACEM', 'INDIAMART', 'INDIGO', 'INDUSINDBK', 'INDUSTOWER', 'INFY', 'IOC', 'IPCALAB', 'IRCTC', 'ITC', 'JINDALSTEL', 'JKCEMENT', 'JSWSTEEL', 'JUBLFOOD', 'KOTAKBANK', 'L&TFH', 'LALPATHLAB', 'LAURUSLABS', 'LICHSGFIN', 'LT', 'LTI', 'LTTS', 'LUPIN', 'M&M', 'M&MFIN', 'MANAPPURAM', 'MARICO', 'MARUTI', 'MCDOWELL-N', 'MCX', 'METROPOLIS', 'MFSL', 'MGL', 'MINDTREE', 'MOTHERSUMI', 'MPHASIS', 'MRF', 'MUTHOOTFIN', 'NAM-INDIA', 'NATIONALUM', 'NAUKRI', 'NAVINFLUOR', 'NBCC', 'NESTLEIND', 'NMDC', 'NTPC', 'OBEROIRLTY', 'OFSS', 'ONGC', 'PAGEIND', 'PEL', 'PERSISTENT', 'PETRONET', 'PFC', 'PFIZER', 'PIDILITIND', 'PIIND', 'PNB', 'POLYCAB', 'POWERGRID', 'PVR', 'RAIN', 'RAMCOCEM', 'RBLBANK', 'RECLTD', 'RELIANCE', 'SAIL', 'SBICARD', 'SBILIFE', 'SBIN', 'SHREECEM', 'SIEMENS', 'SRF', 'SRTRANSFIN', 'STAR', 'SUNPHARMA', 'SUNTV', 'SYNGENE', 'TATACHEM', 'TATACOMM', 'TATACONSUM', 'TATAMOTORS', 'TATAPOWER', 'TATASTEEL', 'TCS', 'TECHM', 'TITAN', 'TORNTPHARM', 'TORNTPOWER', 'TRENT', 'TVSMOTOR', 'UBL', 'ULTRACEMCO', 'UPL', 'VEDL', 'VOLTAS', 'WHIRLPOOL', 'WIPRO', 'ZEEL']
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
