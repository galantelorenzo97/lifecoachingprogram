const sequelize = require('../../sqlconn');
const { DataTypes } = require('sequelize');

function create() {
  const ServiceCost = sequelize.define('ServiceCost', {
    seco_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    min_salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  return ServiceCost;
}

module.exports = {
  create
};
  