// dbfiles/models/client.js
const sequelize = require('../../sqlconn');
const { DataTypes } = require('sequelize');

function create() {
  const Client = sequelize.define('Client', {
    client_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    client_fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    client_lname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coaching_needs: {
      type: DataTypes.STRING,
      allowNull: true
    },
    joined_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    timestamps: false
  });

  return Client;
};

module.exports = {
  create
};