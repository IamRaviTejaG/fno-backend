# F&O Stats Tracker

Backend for tracking stats of F&O stocks listed on NSE. Needs a decent frontend for this to make more sense. Will work on the frontend part soon.

Data is currently streamed from [NSE India](https://www.nseindia.com/) & [Nifty Trader](https://www.niftytrader.in/) for stocks & indices OI data.

## Getting Started
### Step 1:
Install node dependencies:
```bash
npm i
```

### Step 2:
Install redis for your OS using the tutorial here: https://redis.io/download

### Step 3:
Start redis, and run the `lotSizeScript` script using:
```bash
npm run lotSizeScript
```

### Step 4:
Start the node server using:
```bash
npm start
```

## API Documentation
The base URL prefix is `/api`. So all the endpoints below are expected to have this prefix.

1. `/`: Base page, to check if the service uptime.
2. `/list/:type?`: Gets list of available/listed F&O symbols. `type` is optional, defaults to `all`. The other variants include `INDEX`/`EQUITY`.
3. `/lotsize/:symbol`: Gets the lot size info for the given symbol.
4. `/chain/:symbol`: Gets the option chain data for the given symbol.
5. `/oi/live/:symbol`: Gets the live OI data for given INDEX.
6. `/oi/change/:symbol`: Gets the OI change data for given INDEX.
7. `/status`: Gets the current market status, for all the 4 segments (capital, commodity, currency, debt).
