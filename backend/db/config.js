const { Pool } = require('pg'); // Assuming PostgreSQL; adjust as needed
const pool = new Pool({
    user: 'your_user',
    host: 'localhost',
    database: 'music_database',
    password: '12345678_Ps',
    port: 3306,
});

module.exports = pool;
