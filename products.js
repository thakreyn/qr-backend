const mongoose = require('mongoose')

// Creating a Scema for a product
/*
 Product Schema: (product-data db)
        - store id
        - product id
        - name
        - price 
        - description
*/

const ProductSchema = new mongoose.Schema(
    {
        storeid:{
            type: Number,
            require:true
        },
        productid:{
            type: Number,
            require:true
        },
        name:{
            type: String,
            required:true
        },
        price:{
            type: Number,
            require:true
        },
        description:{
            type: String,
            required: true
        }

    },
    {
        collection: 'product-data'
    }
)

module.exports = new mongoose.model('Product', ProductSchema);