const  inquirerHelper = require('./inquirer.js')

const { getRoles, getEmployees, getDepartments,
     addDepartment, addRole, addEmployee, updateEmployee,
    getEmployeesDisplay, getRolesDisplay} 
     = require('../sql/queries.js')
     
const { getCurrentData } = require('../database/retrieveDB.js')
const updateDatabase = require('../database/updateDB.js')
 



const mainMethods = {
    'View All Departments' : async function(){
        const departments = await getCurrentData(getDepartments)
        console.table(departments)
    },
    'View All Roles' : async function(){
        const roles = await getCurrentData(getRolesDisplay)
        console.table(roles)
 
    },
    'View All Employees' : async function(){
        const employees = await getCurrentData(getEmployeesDisplay)
        console.table(employees)

    },
    'Add a department' : async function(){
        const answers = await inquirerHelper(deptQuestions)
        const { deptName } = answers
        const values = [ deptName ]
        updateDatabase(addDepartment, values)
        console.log('Add Department Succesful')
    },
    'Add a role' : async function(){
        const deptOptions = await getCurrentData(getDepartments)
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
                    if (!isNaN(input) && input.length >= 1) {
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
        const { roleName, roleSalary, roleDepartment} = answers
        const values = [ roleName, roleSalary, roleDepartment ]
        updateDatabase(addRole, values)
        console.log('Role Addition Successful')
    },

    'Add An Employee' : async function(){
        const roleOptions = await getCurrentData(getRoles)
        const managerOptions = await getCurrentData(getEmployees)
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
        const { employeeFirstName, employeeLastName, employeeRole, employeeManager} = answers
        const values = [employeeFirstName, employeeLastName, employeeRole,  employeeManager]

        
        updateDatabase(addEmployee, values)
        console.log('Add Employee Successful')
    },

    'Update an Employee Role': async function(){
        const roleOptions = await getCurrentData(getRoles)
        const employeeOptions = await getCurrentData(getEmployees)
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
        const { employeeToUpdate, UpdatedEmployeeRole } = answers
        const values = [employeeToUpdate, UpdatedEmployeeRole]

        updateDatabase(updateEmployee, values)
        console.log('Update an Employee successful')

    },

    'Quit' : function(){
        console.log('See you next time.')
        process.exit(0)
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
            if (input.length >= 2) {
                return true
              } else {
                return false
              }
        }
    }
]




module.exports = { mainMethods, mainQuestions,  }