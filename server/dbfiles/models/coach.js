// models/coach.js
const sequelize = require('../../sqlconn');
const { DataTypes } = require('sequelize');

function create() {
  const Coach = sequelize.define('Coach', {
    coach_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    coach_fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coach_lname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hire_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dism_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    timestamps: false
  });

  return Coach;
}

module.exports = {
    create
};
  