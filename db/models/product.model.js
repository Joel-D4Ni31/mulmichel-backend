const {Model, DataTypes, Sequelize} = require('sequelize');
const { DetalleVenta } = require('./detalleventa.model');

const PRODUCT_TABLE = 'products';
const ProductSchema = {
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

class Product extends Model{
  static associate(models) {
    this.belongsToMany(models.Venta,{
      through: DetalleVenta
    });
    this.belongsTo(models.TipoProduct, {
      foreignKey: {
        name: 'pertenecetipoproduct'
      }
    });
    this.belongsTo(models.Empleado, {
      foreignKey: {
        name: 'perteneceempleado'
      }
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = {PRODUCT_TABLE, ProductSchema, Product};
