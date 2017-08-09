var express = require('express');
var route = express.Router();
var pg =require('pg');
var pool = require('./pg-connection-pool');

route.get('/home', function(req, res, next) {
  pool.query('SELECT * FROM post_content ORDER BY up_votes DESC limit 15').then(function(result) {
    res.json(result.rows);
  });
});
  route.get('/corktown', function(req, res, next) {
    pool.query('SELECT * FROM post_content WHERE zip="48216"').then(function(result) {
      res.json(result.rows);
    });
  });

module.exports = route;
