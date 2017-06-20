'use strict';
module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define('Account', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    providerId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Account.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Account;
};