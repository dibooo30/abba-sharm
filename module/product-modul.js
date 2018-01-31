var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var prSchema = new Schema({
    tripName:{
        type:String,
        required:true
            },
    trepPr:{
        type:String, 
        required:true
    },
    des:{
        type:String,
        required:true
    },
    price:{
        type:Number, 
        required:true
    }

});
module.exports = mongoose.model('Product', prSchema);