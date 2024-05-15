const  inquirer = require('./node_modules/inquirer')
const { mainMethods, mainQuestions } = require('./lib/modules/questions.js')
const inquirerHelper = require('./lib/modules/inquirer.js')

async function questionsAsker(){
    const answers = await inquirerHelper(mainQuestions)
    const operation = answers.main
    mainMethods[operation]()
}

function init(){
    console.log('Welcome to the magical world of tomorrow!')
    questionsAsker()
}





module.exports =  questionsAsker
init()



