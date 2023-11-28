const sequelize = require('../../sqlconn');
const { DataTypes } = require('sequelize');

function create() {
  const CoachingSession = sequelize.define('CoachingSession', {
    cose_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  //CoachingSession.belongsTo(CoachingType, { foreignKey: 'coty_id' });
  //CoachingSession.belongsTo(Coach, { foreignKey: 'coach_id' });

  return CoachingSession;
}

module.exports = {
  create
}
  