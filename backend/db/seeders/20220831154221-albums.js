'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Albums'
    return queryInterface.bulkInsert(options, [
      {
        "userId": 1,
        "title": "Time",
        "description": "An album about time.",
        "createdAt": "2021-11-19 20:39:36",
        "updatedAt": "2021-11-19 20:39:36",
        "previewImage": "image url"
      },
      {
        "userId": 2,
        "title": "Warp",
        "description": "An album about other time.",
        "createdAt": "2021-11-20 20:39:36",
        "updatedAt": "2021-11-20 20:39:36",
        "previewImage": "image url"
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Albums'
    return queryInterface.bulkDelete(options);
  }
};
