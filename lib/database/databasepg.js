// const Client = require('../../node_modules/pg').Pool
const {Pool} = require('pg')
const { idleTimeoutMillis } = require('pg/lib/defaults')
  

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    max: 10,
    idleTimeoutMillis: 20,
})



module.exports = pool