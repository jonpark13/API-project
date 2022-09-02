'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Song, {foreignKey: "songId"})
      Comment.belongsTo(models.User, {foreignKey: "userId"})
    }
  }
  Comment.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    songId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    body: {
      type: DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};