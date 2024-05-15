const  inquirer = require('inquirer')


async function inquirerHelper(questions) {
    const answers = await inquirer.prompt(questions);
        return answers
}


module.exports = inquirerHelper