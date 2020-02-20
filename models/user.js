'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    phno: DataTypes.STRING,
    rollid: DataTypes.INTEGER,
    delBool:DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role,{foreignKey:'rollid'});
    User.belongsTo(models.Project,{foreignKey:'projectId'})
    models.Project.belongsTo(models.Role,{foreignKey:'rollid'})
    models.Project.hasMany(User,{foreignKey:'projectId'})
  };
  return User;
};