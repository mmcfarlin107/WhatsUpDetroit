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
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text',['48216']).then(function(result) {
      res.json(result.rows);
    });
});

route.get('/downtown', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text', ['48226']).then(function(result) {
      res.json(result.rows);
    });
});

route.get('/southwest', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text', ['48209']).then(function(result) {
      res.json(result.rows);
      });
});

route.get('/east-central', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text', ['48207']).then(function(result) {
      res.json(result.rows);
      });
});

route.get('/midtown', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text', ['48201']).then(function(result) {
      res.json(result.rows);
      });
  });

// route.get('/new-center', function(req, res, next) {
//     pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text, score=$2::int', ['48202', >-10]).then(function(result) {
//         res.json(result.rows);
//         });
// });

route.get('/southwest', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text', ['48209']).then(function(result) {
        res.json(result.rows);
        });
});

route.get('/woodbridge', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text', ['48208']).then(function(result) {
        res.json(result.rows);
        });
});

module.exports = route;
