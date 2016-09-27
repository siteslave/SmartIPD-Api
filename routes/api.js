'use strict';

var express = require('express');
var router = express.Router();
var Api = require('../models/api')
/* GET users listing. */
router.get('/ipt/list', function(req, res, next) {
  let db = req.db;
  Api.getList(db)
    .then(rows => {
      res.send({ok: true, rows: rows[0]})
    })
    .catch(err => {
      console.log(err);
      res.send({ok: false, msg: err})
    });
});
router.post('/ipt/drug', function(req, res, next) {
  let db = req.db;
  let an = req.body.an;
  Api.getDrug(db, an)
    .then(rows => {
      res.send({ok: true, rows: rows[0]})
    })
    .catch(err => {
      console.log(err);
      res.send({ok: false, msg: err})
    });
});

module.exports = router;
