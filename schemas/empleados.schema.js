const Joi = require('joi');

const id = Joi.string()
              .uuid();
const nombre = Joi.string()//.alphanum()
                  .min(3)
                  .max(30);
const apellido = Joi.string()//.alphanum()
                  .min(3)
                  .max(30);
const telefono = Joi.string()//.alphanum()
                    .min(3)
                    .max(30);
const correo = Joi.string()//.alphanum()
                  .min(3)
                  .max(30);

const createEmpleadoSchema = Joi.object({
  nombre : nombre.required(),
  apellido : apellido.required(),
  telefono: telefono.required(),
  sueldo: correo.required()
});
const updatempleadoSchema = Joi.object({
  nombre : nombre,
  apellido: apellido,
  telefono: telefono,
  sueldo: correo
});
const getEmpleadoSchema = Joi.object({
  id : id.required()
});

module.exports = {createEmpleadoSchema,updatempleadoSchema,getEmpleadoSchema}
