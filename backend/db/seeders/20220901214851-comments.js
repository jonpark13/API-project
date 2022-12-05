'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Comments'
    return queryInterface.bulkInsert(options, [
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
    options.tableName = 'Comments'
    return queryInterface.bulkDelete(options)
  }
};
