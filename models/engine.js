const mongoose = require("mongoose");
const engineSchema = mongoose.Schema({ 
 EngineType: String, 
 Cylinders: {
    type: Number,
    min :[3,"Minimum 3 cylinders should be given"]
 },
 FuelType: String,
 Transmission :  {
    type : String,
    enum : ["Manual","Automatic"]
 }
}) ;

module.exports = mongoose.model("Engine",engineSchema) 