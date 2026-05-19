const pool = require('./db');

module.exports = async (req, res) => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        res.status(200).json({ message: "Table 'users' created successfully. You can now signup and login!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
