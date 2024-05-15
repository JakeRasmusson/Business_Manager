const getRoles = 'SELECT * FROM role'
const getEmployees = 'SELECT * FROM employee'
const getDepartments = 'SELECT * FROM department'
const addDepartment = 'INSERT INTO department( name ) VALUES($1)'
const addRole = 'INSERT INTO role( title, salary, department_id) VALUES ( $1, $2, $3 )'
const addEmployee = 'INSERT INTO employee( first_name, last_name, role_id, manager_id ) VALUES ( $1, $2, $3, $4 )'
const updateEmployee = 'UPDATE employee SET role_id = $1 WHERE id = $2'

module.exports = {
    getRoles, getEmployees, getDepartments,
    addDepartment, addRole, addEmployee,
    updateEmployee
}