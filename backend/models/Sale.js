const {Schema} = require('mongoose')
const mongoose = require("../db/conn");


const Sale = mongoose.model(
    'Sale',

    new Schema({
        description:{
            type:String,
            require: true
        },
        numsales:{
            type:Number,
            require:true
        },
        unit:{
            type:Number,
            require:true
        },
        unitprice:{
            type:Number,
            require:true
        },
        amount:{
            type:Number,
            require:true
        },
        username:{
            type:String,
            require:true
        }
    })
)

module.exports = Sale

