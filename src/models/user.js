'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    token: DataTypes.STRING,
    providerId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Account, {
          foreignKey: 'userId',
          as: 'accounts'
        });
      }
    }
  });
  return User;
};