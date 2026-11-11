import getArgs from "./helpers/args.js"
import { printError, printHelp, printSuccess } from "./services/log.service.js"
import { saveKeyValue, getKeyValue } from "./services/storage.service.js"
import { getWheather } from "./services/api.service.js"


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

const startCli = () =>{
    const args = getArgs(process.argv)
    console.log(args)

    if(args.h){
        printHelp()
    }
    if(args.s){

    }
    if(args.t){
        return savToken(args.t)
    }
    getWheather('uzbekistan')
}

startCli()