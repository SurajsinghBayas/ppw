const pool = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'All fields are required.' });

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) return res.status(400).json({ error: 'Invalid credentials.' });

        const user = result.rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ error: 'Invalid credentials.' });

        const token = jwt.sign({ userId: user.id }, 'super-secret-key-java-mastery', { expiresIn: '7d' });
        res.status(200).json({ token, name: user.name, email: user.email });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
