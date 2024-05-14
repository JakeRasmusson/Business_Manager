const  inquirer = require('./node_modules/inquirer')
const { mainMethods, mainQuestions } = require('./modules/questions.js')
const inquirerHelper = require('./modules/inquirer.js')

async function questionsAsker(){
    const answers = await inquirerHelper(mainQuestions)
    console.log(answers)
    const operation = answers.main
    mainMethods[operation]()
}

function init(){
    console.log('Welcome to the magical world of tomorrow!')
    questionsAsker()
}





module.exports =  questionsAsker
init()



