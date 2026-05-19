const pool = require('./db');
const crypto = require('crypto');

module.exports = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    const { email, newPassword } = req.body;
    if (!email || !newPassword) return res.status(400).json({ error: 'All fields are required.' });

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) return res.status(400).json({ error: 'User not found.' });

        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(newPassword, salt, 1000, 64, 'sha512').toString('hex');
        const hashedPassword = `${salt}:${hash}`;

        await pool.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email]);
        
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
