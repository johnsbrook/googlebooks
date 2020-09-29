const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    console.log("req.query", req.query);
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    // YOUR CODE HERE
    db.Book.findById(req.query)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));

  },
  create: function(req, res) {
    // YOUR CODE HERE
    db.Book.create(req.query)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
    
  },
  update: function(req, res) {
    // YOUR CODE HERE
    db.Book.findOneAndUpdate(req.query)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
    
  },
  remove: function(req, res) {
    // YOUR CODE HERE
    db.Book.findByIdAndRemove(req.query)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  }
};
