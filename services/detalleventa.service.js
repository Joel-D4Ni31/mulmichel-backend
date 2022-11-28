const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} =  require('./../libs/sequelize');

class DetalleventaService{

  constructor(){
  }
  async create(data){
    const nuevoDetalleventa = {
      id: crypto.randomUUID(),
      ...data
    };
    const salida = await models.DetalleVenta.create(nuevoDetalleventa);
    return salida;
  }
  async find(){
    const salida = await models.DetalleVenta.findAll();
    return salida;
  }
  async findOne(id){
    const detalleventa = await models.DetalleVenta.findByPk(id);
    if (!detalleventa){
        throw boom.notFound('DetalleVenta not found');
      }
    return detalleventa;
  }
  async update(id, changes){
    const detalleventa = await this.findOne(id);
    const salida = await detalleventa.update(changes);
    return salida;
  }
  async delete(id){
    const detalleventa = await this.findOne(id);
    await detalleventa.destroy();
    return {id};
  }
}
module.exports = DetalleventaService;

