// helpers.js - initialize DB if required
const fs = require('fs');
const path = require('path');
const db = require('../db');
const initSql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');

function init() {
  db.exec(initSql);
}
module.exports = { init };
