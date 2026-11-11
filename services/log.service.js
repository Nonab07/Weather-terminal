import chalk from "chalk";
import dedent from "dedent-js";


const printError = error => {
    console.log(chalk.bgRed("Error") + " " + error);
}

const printSuccess = message => {
    console.log(chalk.bgGreen("Success") + " " + message);
}

const printHelp = () => {
    console.log(dedent`
        ${chalk.bgWhite("Help")}
        -s [City] choose the city
        -h for help
        -t [API_KEY] for saving token
    `)
}


export {printError, printSuccess, printHelp}