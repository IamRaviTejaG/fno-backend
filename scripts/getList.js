import axios from 'axios'
import fs from 'fs'
import { parse } from 'node-html-parser'

let url = 'https://www1.nseindia.com/content/fo/fo_underlyinglist.htm'
axios.get(url).then(res => {
    let html_data = parse(res.data)
    let data_table = html_data.getElementsByTagName('td')
    let data = []
    data_table.forEach(td => {
        td.childNodes.forEach(n => {
            if (n.innerText.length <= 10) {
                let a = n.innerText.trim()
                if (a.toUpperCase() === a) {
                    if (!['F&O', '', undefined, null].includes(a)) {
                        let symbol = a.replace('\n', '').replace(' ', '').replace('<br>', '')
                        data.push(symbol)
                    }
                }
            }
        })
    })
    fs.writeFileSync('./static/list.txt', data.toString(), {flag: 'w', encoding: 'utf8'})
    console.log(data)
})
