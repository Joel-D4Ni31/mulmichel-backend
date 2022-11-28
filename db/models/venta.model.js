const {Model, DataTypes, Sequelize} = require('sequelize');

const VENTA_TABLE = 'ventas';
const VentaSchema = {
  id:{
    primaryKey: true,
    type: DataTypes.UUID
  },
  fechaEntrega:{
    allowNull: false,
    type: DataTypes.DATE
  },
  fechaVenta:{
    allowNull: false,
    type: DataTypes.DATE
  },
  costoTotal:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  delivery:{
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Venta extends Model{
  static associate() {
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: VENTA_TABLE,
      modelName: 'Venta',
      timestamps: false
    }
  }
}

module.exports = {VENTA_TABLE, VentaSchema, Venta};
