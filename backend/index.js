const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require ('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors())

//Middleware
app.use(bodyParser.json());
//app.use(express.json());
app.use(morgan('tiny'));

//Routers
const categoriesRoutes = require('./routers/categories');
const productsRoutes = require('./routers/products');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/orders');

const api = process.env.API_URL;

//Routers
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'Ben_Chiekh_Optic'
})
.then(() => {
    console.log('Database Connection is ready');
    mongoose.set('debug', true); // Enable Mongoose debug logs

})
.catch((err)=> {
    console.log(err);
})

app.listen(3000, ()=>{
    console.log(api);
    console.log('server is running http://localhost:3000');
})