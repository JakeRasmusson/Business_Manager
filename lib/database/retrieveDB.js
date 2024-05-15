const  pool  = require('./databasepg.js')

//Retrieve Departments from DB
async function getCurrentData(search) {
    const client = await pool.connect()
    const { rows } = await client.query(search)
    // return new Promise((resolve, reject) => {
    //     client.query(search, (err, res) => {
    //         if (err) {
    //             reject(err);
    //         } else {
    //             resolve(res.rows);
    //         }
    //     });
    // });
    client.release(true)
    return rows
}




module.exports = { getCurrentData }