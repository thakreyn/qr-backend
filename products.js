const express = require('express')
const router = express.Router();

const Product = require("../models/products")



router.get('/:productid', (req,res) => {
    console.log(req.params.productid)
    // Product.findById(req.params.productid).then(
    //     product => {
    //         if(product) res.send(product);
    //         res.status(404)
    //     }
    // ).catch((error) => {
    //     res.status(500).send("Something went wrong")
    // })
})

// router.get('/all', (req, res) => {
//     console.log("This")
//     Product.find()
//     .then((products) => {
//         if(products){
//             res.send(products)
//         }
//         else
//         {
//             res.send("Nahi jama")
//         }
//     })
// })

router.get('/', (req, res) => {
    console.log(req.body, "why");
    res.send(req.body.query)
})

module.exports = router;