const {Model, DataTypes, Sequelize} = require('sequelize');

const CATEGORIA_TABLE = 'categorias';
const CategoriaSchema = {
  id:{
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion:{
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

class Categoria extends Model{
  static associate() {
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: CATEGORIA_TABLE,
      modelName: 'Categoria',
      timestamps: false
    }
  }
}

module.exports = {CATEGORIA_TABLE, CategoriaSchema, Categoria};
