'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Playlists', [
      {
        userId: 1,
        name: 'Favs',
        imageUrl: 'https://picsum.photos/seed/64/173'
      },
      {
        userId: 2,
        name: 'workout',
        imageUrl: 'https://picsum.photos/seed/65/173'
      },
      {
        userId: 3,
        name: 'test',
        imageUrl: 'https://picsum.photos/seed/66/173'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Playlists')
  }
};
