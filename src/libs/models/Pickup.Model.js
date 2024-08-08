const mongoose = require("mongoose")

const pickupSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true
    },
    weight:{
        type:String,
        require:true
    },
    dateTime:{
        type:String,
        require:true
    },
    address:{
        type:Object,
        require:true
    },
    isConfirm:{
        type:Object,
        require:false,
        default:{
            staffPhone:"",
            cost:"",
            confirm:false,
            dateTime:new Date()
        }
    }
});

const Pickup = mongoose.models.Pickup || mongoose.model("Pickup", pickupSchema);

module.exports = Pickup;