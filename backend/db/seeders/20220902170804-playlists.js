'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Playlists', [
      {
        userId: 1,
        name: 'Favs',
        imageUrl: 'image url'
      },
      {
        userId: 2,
        name: 'workout',
        imageUrl: 'image url'
      },
      {
        userId: 3,
        name: 'test',
        imageUrl: 'image url'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Playlists')
  }
};
