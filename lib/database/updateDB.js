const  pool  = require('./databasepg.js')

async function updateDatabase(text, values) {
    const client = await pool.connect()
    const res = await client.query(text, values)
    client.release(true)

}



module.exports = updateDatabase