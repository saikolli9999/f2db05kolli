const mongoose = require("mongoose") 
const engineSchema = mongoose.Schema({ 
 EngineType: String, 
 Cylinders: Number, 
 FuelType: String,
 Transmission : String 
}) 

module.exports = mongoose.model("Engine",engineSchema) 