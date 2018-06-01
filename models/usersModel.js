var db = require('../database/mysqlConnector');

var usersModel = {
  create: data => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO User SET ?', data, (error, results) => {
        if (error) {
          reject(error);
        }
        if (results) {
          resolve(results);
        }
      });
    });
  },

  findByUsername: username => {
    return new Promise((resolve, reject) => {
      db.query(
        'SELECT * FROM User WHERE username = ?;',
        [username],
        (error, results) => {
          if (error) {
            reject(error);
          } else if (results) {
            resolve(results);
          } else {
            reject(new Error('no results'));
          }
        }
      );
    });
  }
};

module.exports = usersModel;