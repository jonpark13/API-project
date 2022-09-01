'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.User, {foreignKey: "userId"})
      Song.belongsTo(models.Album, {foreignKey: "albumId"})
    }
  }
  Song.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    userId: {
      type:DataTypes.INTEGER,
    },
    albumId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    previewImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};