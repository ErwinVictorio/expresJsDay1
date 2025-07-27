const express = require('express');

const app  = express();
const cors = require('cors') // Needed to allow communication between different ports (e.g., frontend and backend)
app.use(express.json());

app.use(cors());

const productRoutes = require('./routes/productRoute');
port = 3000;

// this is the endpoints
app.use('/api/products',productRoutes);


app.listen(port, () =>{
    console.log(`server is running in ${port}`);
})



