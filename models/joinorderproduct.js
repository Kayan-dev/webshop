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
      joinorderproduct.hasMany(models.order);
      joinorderproduct.hasMany(models.product);
    }
  }
  joinorderproduct.init(
    {
      title: DataTypes.STRING,
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "joinorderproduct",
    }
  );
  return joinorderproduct;
};
