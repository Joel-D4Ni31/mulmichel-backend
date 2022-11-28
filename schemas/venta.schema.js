const Joi = require('joi');

const id = Joi.string()
              .uuid();
const fechaVenta = Joi.date();
const fechaEntrega = Joi.date();
const costoTotal = Joi.number()
                  .integer()
                  .min(10);
const delivery = Joi.string()
                  .min(3)
                  .max(30);
const createVentaSchema = Joi.object({
  fechaVenta : fechaVenta.required(),
  fechaEntrega: fechaEntrega.required(),
  costoTotal: costoTotal.required(),
  delivery: delivery.required()
});
const updateVentatSchema = Joi.object({
  fechaVenta : fechaVenta,
  fechaEntrega: fechaEntrega,
  costoTotal: costoTotal,
  delivery: delivery
});
const getVentaSchema = Joi.object({
  id : id.required()
});

module.exports = {createVentaSchema,updateVentatSchema,getVentaSchema,}
