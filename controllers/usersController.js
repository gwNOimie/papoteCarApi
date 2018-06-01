var bcrypt = require('bcrypt');
var usersModel = require('../models/usersModel');

var usersController = {
  findAll: () => {
    throw new Error('Not yet implemented');
  },

  findById: () => {
    throw new Error('Not yet implemented');
  },

  update: () => {
    throw new Error('Not yet implemented');
  },

  create: (req, res) => {
    console.log('=== create user ===');
    var data = req.body;
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        data.password = hash;
        return usersModel.create(data);
      })
      .then(results => {
        res.status(201).json(results);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  },

  delete: () => {
    throw new Error('Not yet implemented');
  },

  login: (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var user;
    usersModel.findByUsername(username)
      .then(results => {
        if (results.length === 1) {
          user = results[0];
          return bcrypt.compare(password, user.password);
        } else {
          return Promise.reject(new Error('More than one user found !?!?'));
        }
      })
      .then(pwdIsTheSame => {
        if (pwdIsTheSame) {
          var user = JSON.parse(JSON.stringify(user));
          res.status(200).json(user);
        } else {
          res.status(500).json({ error: 'Wrong username/pasword...' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  }
};

module.exports = usersController;