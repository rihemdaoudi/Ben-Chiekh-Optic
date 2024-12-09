const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');

//Middleware
app.use(bodyParser.json());
//app.use(express.json());
app.use(morgan('tiny'));


const api = process.env.API_URL;




app.get(`${api}/products`, async (req, res) => {
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({success: false})
    }
    res.send(productList);
})

app.post(`${api}/products`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    });
    product.save().then((createdProduct => {
        res.status(201).json(createdProduct)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        });
    });
});

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