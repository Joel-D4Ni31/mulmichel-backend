const {PRODUCT_TABLE, ProductSchema, Product} = require('./product.model');
const {VENTA_TABLE, VentaSchema, Venta} = require('./venta.model');
const {DETALLEVENTA_TABLE, DetalleventaSchema, DetalleVenta} = require('./detalleventa.model');
const {PAGO_TABLE, PagoSchema, Pago} = require('./pago.model');
//const {CATEGORIA_TABLE, CategoriaSchema, Categoria} = require('./categoria.model');
function setupModels(sequelize){
  Product.init(ProductSchema, Product.config(sequelize));
  Venta.init(VentaSchema, Venta.config(sequelize));
  DetalleVenta.init(DetalleventaSchema, DetalleVenta.config(sequelize));
  Pago.init(PagoSchema, Pago.config(sequelize));
  //Categoria.init(CategoriaSchema, Categoria.config(sequelize));
}
 module.exports = setupModels;
