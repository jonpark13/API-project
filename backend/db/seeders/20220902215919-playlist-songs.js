'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('PlaylistSongs', [
      {
        playlistId: 1,
        songId: 2
      },
      {
        playlistId: 1,
        songId: 3
      },
      {
        playlistId: 2,
        songId: 1
      },
      {
        playlistId: 3,
        songId: 1
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PlaylistSongs')
  }
};
