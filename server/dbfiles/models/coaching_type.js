// dbfiles/models/coaching_type.js
const sequelize = require('../../sqlconn');
const { DataTypes } = require('sequelize');

function create() {
    const CoachingType = sequelize.define('CoachingType', {
        coty_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {
        timestamps: false
      });
    
      return CoachingType;
}
module.exports = {
    create    
}
  