const {Model, DataTypes, Sequelize} = require('sequelize');

const DETALLEVENTA_TABLE = 'detalleventas';
const DetalleventaSchema = {
  id:{
    primaryKey: true,
    type: DataTypes.UUID
  },
  cantidad:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  precio:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  subtotal:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  idVenta:{
    allowNull: false,
    type: DataTypes.UUID
  },
  idProduct:{
    allowNull: false,
    type: DataTypes.UUID
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
