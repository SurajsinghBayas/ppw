const pool = require('./db');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
    
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required.' });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hashedPassword]);
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        if (err.code === '23505') { // postgres unique constraint violation code
            res.status(400).json({ error: 'Email already exists.' });
        } else {
            res.status(500).json({ error: err.message });
        }
    }
};
