import getArgs from "./helpers/args.js"
import { printError, printHelp, printSuccess, printService } from "./services/log.service.js"
import { saveKeyValue, getKeyValue } from "./services/storage.service.js"
import { getWheather } from "./services/api.service.js"
import { TOKEN_DICTIONARY } from "./services/storage.service.js"


const savToken = async token => {
    if(!token.length){
        printError("Token doesn't exist")
        return
    }
    try {
        await saveKeyValue("token", token)
        printSuccess("Token was added")
    } catch (error) {
        printError(error.message)
    }
}

const savCity = async city => {
    if(!city.length){
        printError("City doesn't exist")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess("City was added")
    } catch (error) {
        printError(error.message)
    }
}

const getForcast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
        const response = await getWheather(city)
        printService(response, "☀️")
    } catch (error) {
        if(error?.response?.status == 404){
            printError("City not found")
        }else if(error?.response?.status == 401){
            printError("Invalid token")
        }else{
            printError(error.message)
        }
    }
}

const startCli = () =>{
    const args = getArgs(process.argv)
    console.log(args)

    if(args.h){
        return printHelp()
    }
    if(args.s){
        return savCity(args.s)
    }
    if(args.t){
        return savToken(args.t)
    }
    return getForcast()
}

startCli()