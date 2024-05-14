const Client = require('../../node_modules/pg').Pool

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'root',
    database: 'fake_business'
})

module.exports = client