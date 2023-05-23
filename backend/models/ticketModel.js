const mongoose=require('mongoose')

const ticketSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true, 'Please add a name'],
        ref:'User'
    },
    product:{
        type:String,
        required:[true, 'Please selec a product'],
        enum:['iPhone','Macbook Pro','iMac','iPad'],
    },
    description:{
        type:String,
        required:[true, 'Please enter a description of the issue'],
    },
    status:{
        type:String,
        required:true,
        enum:['new','open','closed'],
        default:false
    }
},
{
timestamps:true,
})

module.exports=mongoose.model('Ticket',ticketSchema)