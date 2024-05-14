const  client  = require('../lib/database/databasepg.js')

//Retrieve Departments from DB
async function getCurrentData(search) {
    return new Promise((resolve, reject) => {
        client.query(search, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res.rows);
            }
        });
    });
}




module.exports = { getCurrentData }