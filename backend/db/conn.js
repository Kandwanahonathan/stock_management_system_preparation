
const mongoose = require('mongoose');

function connection(){
    try{
        mongoose.connect('mongodb://localhost:27017/trial');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connection();