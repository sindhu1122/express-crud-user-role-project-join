'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', ['rollid'], {
          type: 'foreign key',
          name: 'rollid',
          references: { //Required field
            table: 'Roles',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        });
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
  }
}