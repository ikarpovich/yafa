const userController = require('../controllers').user;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to YAFA',
  }));

  app.post('/user', userController.create);
};