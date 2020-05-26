const express = require('express');

const app = express();

const {productRouter} = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products', productRouter);

app.listen(1616, err => {
    if (err) console.log(err);
    else console.log('Listen 1616...')
});
