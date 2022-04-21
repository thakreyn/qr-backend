const express = require('express')

const app = express()
const mongoose = require('mongoose')

require('dotenv').config()
const productsRoute = require('./routes/products')

const Product = require('./models/products')
const Directions = require('./models/direction')


const PORT = process.env.PORT || 4000

// Middlewares

// parsing json
app.use(express.json());

app.use(express.urlencoded({extended: true}));


// Routes

app.get('/all', (req, res) => {
    Product.find()
    .then((products) => res.send(products))
})

app.get('/api/products/:id' , (req, res) => {

    let query = req.params.id.slice(1,)
    let queryType = req.params.id[0]

    if(queryType == '1'){
        // Direction
        Directions.findById(query)
        .then((direction) => {
            console.log(direction)
            if(direction){
                res.send(direction)
            }
            else {
                res.status(404).send("Not Found")
            }
        })
        .catch((error) => {
            res.status(405).send({"message":"Invalid Request"})
            console.log(error)
        })
    }
    else{
        Product.findById(query)
    .then((product) => {
        console.log(product)
        if(product){
            res.send(product)
        }
        else{
            res.status(404).send("Not Found")
        }
    })
    .catch((error) => {
        res.status(405).send({"message" : "Invalid Request"})
        console.log(error)
    })
    }
    // console.log(query)
    // res.send("Done")
    

})

app.use('/api/products', productsRoute);

// Connect to mongodb atlas
// Replace username , <password> and myFirstDatabase
// dbname: qr-data | collectionname: product-data
mongoose.connect(
    process.env.MONGO_URL
)
.then(() => {
    console.log("Connected to db server")
})
.catch(error => {
    console.log("Something went wrong", error);
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})

/*
    Request will be in the form of:
    <type>-<store_id>-<product_id>
    eg: 1-123-45632

    Product Schema: (product-data db)
        - store id
        - product id
        - name
        - price 
        - description

    Direction Schema: (direction-data db)
        - store id
        - directions

*/
