const  inquirer = require('../node_modules/inquirer')


async function inquirerHelper(questions) {
    const answers = await inquirer.prompt(questions);
        return answers
}


module.exports = inquirerHelper