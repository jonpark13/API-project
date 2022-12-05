'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Playlists'
    return queryInterface.bulkInsert(options, [
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
    options.tableName = 'Playlists'
    return queryInterface.bulkDelete(options)
  }
};
