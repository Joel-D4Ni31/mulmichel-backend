const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} =  require('./../libs/sequelize');

class CategoriaService{

  constructor(){
  }
  async create(data){
    const nuevoCategoria = {
      id: crypto.randomUUID(),
      ...data
    };
    const salida = await models.Categoria.create(nuevoCategoria);
    return salida;
  }
  async find(){
    const salida = await models.Categoria.findAll();
    return salida;
  }
  async findOne(id){
    const categoria = await models.Categoria.findByPk(id);
    if (!categoria){
        throw boom.notFound('Categoria not found');
      }
    return categoria;
  }
  async update(id, changes){
    const categoria = await this.findOne(id);
    const salida = await categoria.update(changes);
    return salida;
  }
  async delete(id){
    const categoria = await this.findOne(id);
    await categoria.destroy();
    return {id};
  }
}
module.exports = CategoriaService;
