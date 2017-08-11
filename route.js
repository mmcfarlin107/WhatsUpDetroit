var express = require('express');
var route = express.Router();
var pg =require('pg');
var pool = require('./pg-connection-pool');

route.get('/home', function(req, res, next) {
  pool.query('SELECT * FROM post_content ORDER BY id DESC limit 15').then(function(result) {
    res.json(result.rows);
   });
});

route.get('/getposts/:zip', function(req, res, next) {
    var zip = req.params.zip
    console.log(zip)
    pool.query('SELECT * FROM post_content WHERE zip=$1::text and score>$2::int order by id', [zip, -10]).then(function(result) {
      res.json(result.rows);
    });
});

route.post('/post', function(req, res, next){
  var data = req.body;
  pool.query('insert into post_content (post, zip, up_votes, down_votes, score) values ($1::text, $2::text, $3::int, $4::int, $5::int)', [data.post, data.zip, 0, 0, 0]).then(function(){
    pool.query('SELECT * FROM post_content WHERE zip=$1::text and score>$2::int order by id', [data.zip, -10]).then(function(result){
      res.json(result.rows);
      });
  });
});


route.put('/upvote/:id', function(req, res, next){
  var id = req.params.id;
  var data = req.body;
  var upvote = data.up_votes + 1;
  var score = data.score + 1;
  var zip = data.zip;
  
  console.log('talking from route')
  pool.query('update post_content set up_votes = $1::int, score = $2::int where id = $3::int', [upvote, score, id]).then(function(result){
      pool.query('select * from post_content where zip = $1::text and score>$2::int order by id', [zip, -10]).then(function(result){
        res.send(result.rows)
        console.log(result.rows)
      });
    });
  });

route.put('/downvote/:id', function(req, res, next){
  var id = req.params.id;
  var data= req.body;
  var downvote = data.down_votes + 1;
  var score = data.score - 1;
  var zip = data.zip;

  console.log('downvote talking from route too')
  pool.query('update post_content set down_votes = $1::int, score = $2::int where id = $3::int', [downvote, score, id]).then(function(result){
      pool.query('select * from post_content where zip = $1::text and score>$2::int order by id', [zip, -10]).then(function(result){
        res.send(result.rows);
        console.log(result.rows);
      });
   });
});


/*
route.get('/southwest', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text and score>$2::int', ['48209', -10]).then(function(result) {
      res.json(result.rows);
      });
});

route.get('/east-central', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text and score>$2::int', ['48207', -10]).then(function(result) {
      res.json(result.rows);
      });
});

route.get('/midtown', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text and score>$2::int', ['48201', -10]).then(function(result) {
      res.json(result.rows);
      });
  });

route.get('/new-center', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text and score>$2::int', ['48202', -10]).then(function(result) {
        res.json(result.rows);
        });
});



route.get('/southwest', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text and score>$2::int', ['48209', -10]).then(function(result) {
        res.json(result.rows);
        });
});

route.get('/woodbridge', function(req, res, next) {
    pool.query('SELECT post, up_votes, down_votes FROM post_content WHERE zip=$1::text and score>$2::int', ['48208', -10]).then(function(result) {
        res.json(result.rows);
        });
});
*/




module.exports = route;
