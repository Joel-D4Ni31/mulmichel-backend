const {Model, DataTypes, Sequelize} = require('sequelize');

const DETALLEVENTA_TABLE = 'detalleventas';
const DetalleventaSchema = {
  id:{
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING
  },
  precio:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class DetalleVenta extends Model{
  static associate() {
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: DETALLEVENTA_TABLE,
      modelName: 'detalleventa',
      timestamps: false
    }
  }
}

module.exports = {DETALLEVENTA_TABLE, DetalleventaSchema, DetalleVenta};
