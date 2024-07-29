const express = require('express');
const axios = require('axios');
const cors = require('cors');
const router = require('./productRouter');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/products', router);


app.get('/products/category/jewelery', async (req, res) => {

    const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
    res.json(response.data);
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
