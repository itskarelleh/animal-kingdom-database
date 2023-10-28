const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PG_USERNAME,
    host: process.env.PG_HOST,
    database: process.env.PG_DB_NAME,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

module.exports = {
    query: (text : any, params : any) => pool.query(text, params)
}