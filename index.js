const express = require('express');
const routerApi = require('./routes');
//const { use } = require('./routes/product.router');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req, res) => {
  res.send('hi from server express');
});


//derivando toda la resolución de rutas a la ruta /routes/
routerApi(app);

app.listen(port, () => {
  console.log("Express active in port: "+port);
});
