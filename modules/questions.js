const  inquirerHelper = require('./inquirer.js')
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
    'Add a department' : async function(){
        const answers = await inquirerHelper(deptQuestions)

    },
    'Add a role' : async function(){
        const answers = await inquirerHelper(roleQuestions)
        console.log('Add a role Method')

    },
    'Add An Employee' : async function(){
        const answers = await inquirerHelper(newEmployeeQuestions)
        console.log('Add An Employee Method')

    },
    'Update an Employee Role': async function(){
        const answers = await inquirerHelper(updateEmployeeQuestions)
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
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the name of the department?',
        validate: function(input){
            if (input.length >= 3) {
                return true
              } else {
                return false
              }
        }
    }
]

const roleQuestions = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role you would like to add?',
        validate: function(input){
            if (input.length >= 3) {
                return true
              } else {
                return false
              }
        }
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: 'What is the salary of the role you would like to add?',
        validate: function(input){
            if (!isNaN(input)) {
                return true
              } else {
                return false
              }
        }   
    },
    {
        type: 'input',
        name: 'roleDepartment',
        message: 'What is the department that this role falls under?',
        validate: function(input){
            if (input.length >= 3) {
                return true
              } else {
                return false
              }
        }
    }
]

const newEmployeeQuestions = [
    {
        type: 'input',
        name: 'employeeFirstName',
        message: 'What is the first name of the new employee?',
        default : 'TBD'
    },
    {
        type: 'input',
        name: 'employeeLastName',
        message: 'What is the last name of the new employee?',
        default : 'TBD'
    },
    {
        type: 'input',
        name: 'employeeRole',
        message: 'What role is the new employee going to fill?',
        default: 'TBD'
    },
    {
        type: 'input',
        name: 'employeeManager',
        message: 'Who is this employees manager?',
        default : 'TBD'
    }

]

const updateEmployeeQuestions = [
    {}
]


module.exports = { mainMethods, mainQuestions, deptQuestions, roleQuestions, newEmployeeQuestions, updateEmployeeQuestions }