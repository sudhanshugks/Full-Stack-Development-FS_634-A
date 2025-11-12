// db.js - simple better-sqlite3 wrapper
const Database = require('better-sqlite3');
const { DB_FILE } = process.env;
const dbFile = DB_FILE || './data/blog.db';
const db = new Database(dbFile);

module.exports = db;
