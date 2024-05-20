const getRoles = 'SELECT * FROM employeerole'
const getEmployees = "SELECT * FROM employee"
const getRolesDisplay = 'SELECT er.id AS "Employee ID", er.title AS "Title", er.salary AS "Salary", d.name AS "Department" FROM employeerole er JOIN department d ON er.department_id = d.id'
const getEmployeesDisplay = `SELECT e.id AS employee_id, e.first_name AS "Employee First Name", e.last_name AS "Employee Last Name", er.title AS "Title", er.salary AS "Salary", CONCAT(m.first_name, ' ', m.last_name) AS "Manager", d.name AS "Department" FROM employee e JOIN employeerole er ON e.role_id = er.id LEFT JOIN employee m ON e.manager_id = m.id JOIN department d ON er.department_id = d.id`
const getDepartments = 'SELECT * FROM department'
const addDepartment = 'INSERT INTO department( name ) VALUES($1)'
const addRole = 'INSERT INTO employeerole( title, salary, department_id) VALUES ( $1, $2, $3 )'
const addEmployee = 'INSERT INTO employee( first_name, last_name, role_id, manager_id ) VALUES ( $1, $2, $3, $4 )'
const updateEmployee = 'UPDATE employee SET role_id = $1 WHERE id = $2'

module.exports = {
    getRoles, getEmployees, getDepartments,
    addDepartment, addRole, addEmployee,
    updateEmployee, getRolesDisplay, getEmployeesDisplay
}