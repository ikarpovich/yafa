const User = require('../models').User;

module.exports = {
  create(req, res) {
  return User
    .create({
      name: req.body.name,
      token: req.body.token,
      providerId: req.body.providerId,
    })
    .then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));
  },
};