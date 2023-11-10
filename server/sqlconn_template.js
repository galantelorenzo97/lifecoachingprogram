//Adjust this template accordingly and rename to sqlconn.js
const Sequelize = require('sequelize');
const config = require('./dbfiles/config/config.json');

const sequelize = new Sequelize(config.development);

module.exports = sequelize;

