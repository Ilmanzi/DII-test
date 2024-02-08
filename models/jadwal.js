'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jadwal.belongsTo(models.Dokter, { foreignKey: "dokter_id"})
    }
  }
  Jadwal.init({
    dokter_id: DataTypes.INTEGER,
    day: DataTypes.STRING,
    time_start: DataTypes.STRING,
    time_finsih: DataTypes.STRING,
    quota: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    doctor_name: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Jadwal',
  });
  return Jadwal;
};