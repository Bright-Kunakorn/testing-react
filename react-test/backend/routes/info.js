const router = require('express').Router();
let Info = require('../models/info.model')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://NARIT:cNarit73@cluster0.p42in.mongodb.net/star";

router.route('/').get((req, res) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("star");
  dbo.collection("info").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
});

module.exports = router;