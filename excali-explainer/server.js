const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Map Vercel Serverless API routes
const initHandler = require('./api/init');
const signupHandler = require('./api/signup');
const loginHandler = require('./api/login');
const forgotHandler = require('./api/forgot');

// Support both GET and POST for init, POST for auth endpoints
app.all('/api/init', initHandler);
app.post('/api/signup', signupHandler);
app.post('/api/login', loginHandler);
app.post('/api/forgot', forgotHandler);

// Serve static web app assets
app.use(express.static(__dirname));

// Fallback middleware to index.html for unmatched routes
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Excali-Explainer local server running at:`);
    console.log(`   http://localhost:${PORT}`);
    console.log(`======================================================\n`);
});
