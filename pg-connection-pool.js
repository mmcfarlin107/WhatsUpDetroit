var pg = require('pg');

var config = {
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: ''
};

module.exports= new pg.Pool(config);
