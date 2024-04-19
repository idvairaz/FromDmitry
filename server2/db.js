const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "moves_genre_db_2"
})
pool.connect();
module.exports = pool