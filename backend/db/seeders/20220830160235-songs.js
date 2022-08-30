'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Songs', [
      {
        "id": 1,
        "userId": 1,
        "albumId": 1,
        "title": "Yesterday",
        "description": "A song about the past.",
        "url": "audio url",
        "createdAt": "2021-11-19 20:39:36",
        "updatedAt": "2021-11-19 20:39:36",
        "previewImage": "image url"
      },
      {
        "id": 2,
        "userId": 1,
        "albumId": 1,
        "title": "Today",
        "description": "A song about now.",
        "url": "audio url",
        "createdAt": "2021-11-19 20:39:36",
        "updatedAt": "2021-11-19 20:39:36",
        "previewImage": "image url"
      },
      {
        "id": 3,
        "userId": 2,
        "albumId": 1,
        "title": "Noday",
        "description": "A song about nothing.",
        "url": "audio url",
        "createdAt": "2021-11-19 20:39:36",
        "updatedAt": "2021-11-19 20:39:36",
        "previewImage": "image url"
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Songs');
  }
};
