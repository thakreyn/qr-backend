const mongoose = require('mongoose')

// Direction Schema
/*
        Direction Schema: (direction-data db)
        - store id
        - direction id
        - directions
*/

const DirectionSchema = new mongoose.Schema(
    {
        storeid: {
            type: Number,
            required: true
        },
        directionid: {
            type: Number,
            required: true
        },
        directions: {
            type: String,
            required: true
        },
        isDirection: {
            type: Boolean,
            required: true
        }
    },
    {
        collection : "products"
    }
)

module.exports = new mongoose.model('Directions', DirectionSchema);