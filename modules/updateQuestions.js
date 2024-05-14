const  client  = require('../lib/database/databasepg.js')
const { getRoles, getEmployees, getDepartments } = require('../lib/sql/queries.js')

//Retrieve roles from DB
async function getCurrentRoles() {
    return new Promise((resolve, reject) => {
        client.query(getRoles, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.rows);
            }
        });
    });
}

async function parseRoles() {
    try {
        const curRoles = await getCurrentRoles();
        return curRoles
    } catch (err) {
        console.error("Error fetching roles:", err);
    }
}

//Retrieve Employees from DB
async function getCurrentEmployees() {
    return new Promise((resolve, reject) => {
        client.query(getEmployees, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.rows);
            }
        });
    });
}

async function parseEmployees() {
    try {
        const curRoles = await getCurrentEmployees();
        return curRoles
    } catch (err) {
        console.error("Error fetching roles:", err);
    }
}


//Retrieve Departments from DB
async function getCurrentDepartments() {
    return new Promise((resolve, reject) => {
        client.query(getDepartments, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.rows);
            }
        });
    });
}

async function parseDepartments() {
    try {
        const curDept = await getCurrentDepartments();
        return curDept
    } catch (err) {
        console.error("Error fetching roles:", err);
    }
}




module.exports = { parseRoles, parseEmployees, parseDepartments }