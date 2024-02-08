'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dokter.hasMany(models.Jadwal, { foreignKey: "dokter_id"})
    }
  }
  Dokter.init({
    name: DataTypes.STRING,
    specialist: DataTypes.STRING,
    rating: DataTypes.STRING,
    urgent_call: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};