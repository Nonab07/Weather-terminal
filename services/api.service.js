import https from 'https'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'

const getWheather = async city => {
    const token = getKeyValue(TOKEN_DICTIONARY.token)

    if(!token){
        throw new Error("API doesn't exist, -t [API_KEY] for saving token")
    }

    // const url = new URL("https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=5a6ce2f2a0f5ba904ec484f7013f5ed9")
    // url.searchParams.append('q', city)
    // url.searchParams.append('appid', token)
    // url.searchParams.append("lang", 'en')
    // url.searchParams.append('units', 'metric')

    // https.get(url, response =>{
    //     let res = ''
    //     response.on('data', chunk =>{
    //         res += chunk
    //     })

    //     response.on("end", () =>{
    //         console.log(res)
    //     })
    // })
}


export {getWheather}