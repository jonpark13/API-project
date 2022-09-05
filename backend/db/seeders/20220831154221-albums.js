'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Albums', [
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
    return queryInterface.bulkDelete('Albums');
  }
};
