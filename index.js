const { mainMethods, mainQuestions } = require('./lib/modules/questions.js')
const inquirerHelper = require('./lib/modules/inquirer.js')

async function questionsAsker(){
    const answers = await inquirerHelper(mainQuestions)
    const operation = answers.main
    await mainMethods[operation]()
    await questionsAsker()
}

function init(){
    console.log(`


    
Welcome to the magical world of tomorrow!
    
    
    
    
    `)
    questionsAsker()
}



init()



