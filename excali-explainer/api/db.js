const { Pool } = require('pg');

// Initialize the PostgreSQL connection pool using the provided Neon DB string
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_PwE6tWUjT7LK@ep-muddy-bread-aoutwxzp-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
});

module.exports = pool;
