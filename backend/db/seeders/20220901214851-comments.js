'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 2,
        songId: 1,
        body: 'cool'
      },
      {
        userId: 3,
        songId: 1,
        body: 'kinda cool'
      },
      {
        userId: 1,
        songId: 3,
        body: 'meh'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Comments')
  }
};
