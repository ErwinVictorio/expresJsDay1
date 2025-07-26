const express = require('express');

const app  = express();
app.use(express.json());
const productRoutes = require('./routes/productRoute');
port = 3000;

// this is the endpoints
app.use('/api/products',productRoutes);


app.listen(port, () =>{
    console.log(`server is running in ${port}`);
})



