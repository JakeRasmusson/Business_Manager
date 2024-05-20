const  pool  = require('./databasepg.js')

//Retrieve Departments from DB
async function getCurrentData(search) {
    const client = await pool.connect()
    const { rows } = await client.query(search)
    client.release(true)
    return rows
}




module.exports = { getCurrentData }