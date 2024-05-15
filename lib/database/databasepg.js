// const Client = require('../../node_modules/pg').Pool
const {Pool} = require('pg')
const { idleTimeoutMillis } = require('pg/lib/defaults')


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'root',
    database: 'fake_business',
    max: 10,
    idleTimeoutMillis: 2000,
})



module.exports = pool