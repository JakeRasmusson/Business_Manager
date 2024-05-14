const  inquirerHelper = require('./inquirer.js')
const questionsAsker = require('../index.js')
const { parseRoles, parseEmployees, parseDepartments } = require('../modules/updateQuestions.js')
 
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
        const deptOptions = await parseDepartments()
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
                type: 'list',
                name: 'roleDepartment',
                message: 'What is the department that this role falls under?',
                choices: deptOptions.map((dept) => {
                    return {
                        name: dept.name,
                        value: dept.id
                    }
                })
            }
        ]

        const answers = await inquirerHelper(roleQuestions)
        console.log(answers)
        console.log('Add a role Method Sucessful')
    },

    'Add An Employee' : async function(){
        const roleOptions = await parseRoles()
        const managerOptions = await parseEmployees()
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
                type: 'list',
                name: 'employeeRole',
                message: 'What role is the new employee going to fill?',
                choices: roleOptions.map((role) => {
                    return {
                        name: role.title,
                        value: role.id
                    }
                })
            },{
                type: 'list',
                name: 'employeeManager',
                message: 'What role is this employees manager?',
                choices: managerOptions.map((employee) => {
                    return {
                        name: `${employee.first_name} ${employee.last_name}`,
                        value: employee.id
                    }
                })
            }
        
        ]
        const answers = await inquirerHelper(newEmployeeQuestions)
        console.log(answers)

    },

    'Update an Employee Role': async function(){
        const roleOptions = await parseRoles()
        const employeeOptions = await parseEmployees()
        const updateEmployeeQuestions = [
            {
                type: 'list',
                name: 'employeeToUpdate',
                message: 'What Employee do you want to update?',
                choices: employeeOptions.map((employee) => {
                    return {
                        name: `${employee.first_name} ${employee.last_name}`,
                        value: employee.id
                    }
                })
            },
            {
                type: 'list',
                name: 'UpdatedEmployeeRole',
                message: 'What role should this employee have now?',
                choices: roleOptions.map((role) => {
                    return {
                        name: role.title,
                        value: role.id
                    }
                })
            }
        ]
        const answers = await inquirerHelper(updateEmployeeQuestions)
        console.log(answers)
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

// const roleQuestions = [
//     {
//         type: 'input',
//         name: 'roleName',
//         message: 'What is the name of the role you would like to add?',
//         validate: function(input){
//             if (input.length >= 3) {
//                 return true
//               } else {
//                 return false
//               }
//         }
//     },
//     {
//         type: 'input',
//         name: 'roleSalary',
//         message: 'What is the salary of the role you would like to add?',
//         validate: function(input){
//             if (!isNaN(input)) {
//                 return true
//               } else {
//                 return false
//               }
//         }   
//     },
//     {
//         type: 'input',
//         name: 'roleDepartment',
//         message: 'What is the department that this role falls under?',
//         validate: function(input){
//             if (input.length >= 3) {
//                 return true
//               } else {
//                 return false
//               }
//         }
//     }
// ]

// const newEmployeeQuestions = [
//     {
//         type: 'input',
//         name: 'employeeFirstName',
//         message: 'What is the first name of the new employee?',
//         default : 'TBD'
//     },
//     {
//         type: 'input',
//         name: 'employeeLastName',
//         message: 'What is the last name of the new employee?',
//         default : 'TBD'
//     },
//     {
//         type: 'list',
//         name: 'employeeRole',
//         message: 'What role is the new employee going to fill?',
//         choices: parseRoles()
//     },
//     {
//         type: 'input',
//         name: 'employeeManager',
//         message: 'Who is this employees manager?',
//         default : 'TBD'
//     }

// ]






module.exports = { mainMethods, mainQuestions,  }