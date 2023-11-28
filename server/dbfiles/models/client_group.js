// dbfiles/models/client_group.js
const sequelize = require('../../sqlconn');
const { DataTypes } = require('sequelize');

function create() {
  const ClientGroup = sequelize.define('ClientGroup', {
    clgr_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'client_groups',
    timestamps: false
  });

  //ClientGroup.belongsTo(CoachingSession, { foreignKey: 'cose_id' });
  //ClientGroup.belongsTo(Client, { foreignKey: 'client_id' });

  return ClientGroup;
}

module.exports = { 
  create 
}
  