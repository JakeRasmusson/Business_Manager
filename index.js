require('dotenv').config()
const { mainMethods, mainQuestions } = require('./lib/modules/questions.js')
const inquirerHelper = require('./lib/modules/inquirer.js')


async function questionsAsker(){
    const answers = await inquirerHelper(mainQuestions)
    const operation = answers.main
    await mainMethods[operation]()
    await questionsAsker()
}

function init(){
    console.clear()
    // console.log("\r\n.-. .-')                 .-')                 .-') _   ('-.    .-')     .-')    \r\n\\  ( OO )               ( OO ).              ( OO ) )_(  OO)  ( OO ).  ( OO ).  \r\n ;-----.\\  ,--. ,--.   (_)---\\_)  ,-.-') ,--.\/ ,--,'(,------.(_)---\\_)(_)---\\_) \r\n | .-.  |  |  | |  |   \/    _ |   |  |OO)|   \\ |  |\\ |  .---'\/    _ | \/    _ |  \r\n | '-' \/_) |  | | .-') \\  :` `.   |  |  \\|    \\|  | )|  |    \\  :` `. \\  :` `.  \r\n | .-. `.  |  |_|( OO ) '..`''.)  |  |(_\/|  .     |\/(|  '--.  '..`''.) '..`''.) \r\n | |  \\  | |  | | `-' \/.-._)   \\ ,|  |_.'|  |\\    |  |  .--' .-._)   \\.-._)   \\ \r\n | '--'  \/('  '-'(_.-' \\       \/(_|  |   |  | \\   |  |  `---.\\       \/\\       \/ \r\n `------'   `-----'     `-----'   `--'   `--'  `--'  `------' `-----'  `-----' \r\n")
    console.log("\r\n.-. .-')                              .-')                 .-') _   ('-.    .-')     .-')    \r\n\\  ( OO )                            ( OO ).              ( OO ) )_(  OO)  ( OO ).  ( OO ).  \r\n ;-----.\\  .-'),-----.  .-'),-----. (_)---\\_)  ,-.-') ,--.\/ ,--,'(,------.(_)---\\_)(_)---\\_) \r\n | .-.  | ( OO'  .-.  '( OO'  .-.  '\/    _ |   |  |OO)|   \\ |  |\\ |  .---'\/    _ | \/    _ |  \r\n | '-' \/_)\/   |  | |  |\/   |  | |  |\\  :` `.   |  |  \\|    \\|  | )|  |    \\  :` `. \\  :` `.  \r\n | .-. `. \\_) |  |\\|  |\\_) |  |\\|  | '..`''.)  |  |(_\/|  .     |\/(|  '--.  '..`''.) '..`''.) \r\n | |  \\  |  \\ |  | |  |  \\ |  | |  |.-._)   \\ ,|  |_.'|  |\\    |  |  .--' .-._)   \\.-._)   \\ \r\n | '--'  \/   `'  '-'  '   `'  '-'  '\\       \/(_|  |   |  | \\   |  |  `---.\\       \/\\       \/ \r\n `------'      `-----'      `-----'  `-----'   `--'   `--'  `--'  `------' `-----'  `-----'   \r\n" + "\n                                   So productive it's scary!" + "\n \n \n \n")

    questionsAsker()
}



init()



