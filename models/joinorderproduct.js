"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinorderproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      joinordertable.hasMany(models.order);
      joinordertable.hasMany(models.product);
    }
  }
  joinorderproduct.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "joinorderproduct",
    }
  );
  return joinorderproduct;
};
