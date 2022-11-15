const express = require('express');
//const router = require('./pago.router');
const pagoRouter = require('./pago.router');

function routerApi4(app){
   const routerv1 = express.Router();
   app.use('/api/v1',routerv1);
   routerv1.use('/pagos',pagoRouter);
  }

module.exports  = routerApi4;
