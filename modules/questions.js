const  inquirer = require('../node_modules/inquirer')
const questionsAsker = require('../index.js')
console.log(questionsAsker)
const mainMethods = {
    'View All Departments' : function(){
        console.log('view all departments Method')
        questionsAsker()
    },
    'View All Roles' : function(){
        console.log('View All Roles Method')
        questionsAsker()
    },
    'View All Employees' : function(){
        console.log('View All Employees Method')
        questionsAsker()
    },
    'Add a department' : function(){
        

    },
    'Add a role' : function(){
        console.log('Add a role Method')

    },
    'Add An Employee' : function(){
        console.log('Add An Employee Method')

    },
    'Update an Employee Role': function(){
        console.log('Update an Employee Role Method')

    },
    'Quit' : function(){
        console.log('See you next time.')
    }

}

const mainQuestions = [
    {
        type: 'list',
        name: 'main',
        message: 'What would you like to do?',
        choices: [...Object.keys(mainMethods)],
        default: 'none'
    }
]


const deptQuestions = [
    {}
]

const roleQuestions = [
    {}
]

const newEmployeeQuestions = [
    {}
]

const updateEmployeeQuestions = [
    {}
]


module.exports = { mainMethods, mainQuestions, deptQuestions, roleQuestions, newEmployeeQuestions, updateEmployeeQuestions }