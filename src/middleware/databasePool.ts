var pg = require('pg')
var PGUSER = 'postgres'
var PGDATABASE = 'oscpushserver'
var config = {
  user: PGUSER, // name of the user account
  database: PGDATABASE, // name of the database
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 
}

var pool = new pg.Pool(config);

module.exports = pool;