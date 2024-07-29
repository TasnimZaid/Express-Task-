const express = require('express');
const axios = require('axios');
const router = express.Router();



router.get('/category/jewelery' , async (req , res)=>{
    const response = await axios.get("https://fakestoreapi.com/products/category/jewelery");
    res.json(response.data);
})



router.get('/product/:id' , async  (req , res)=>{
    const { id } = req.params;
    const response =  await  axios.get(`https://fakestoreapi.com/products/${id}`);
    res.json(response.data);

})

module.exports = router;
