const mongoose=require('mongoose');

const transactionSchema=new mongoose.Schema({
    transactionDate:{type:Date,required:true},
    quantityMoved:{type:Number,required:true},
    transactionType:{type:String,required:true} 
})
const Transaction=mongoose.model('Transaction',transactionSchema);

module.exports=Transaction;