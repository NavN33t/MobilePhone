const mongoose = require('mongoose');
const phoneSchema = new mongoose.Schema
({
    name: { String, 
           required: true,
           min:3,
           type: String, 
           required : true},
    
    type: { String,
            required: true,
           type: String},
    
    version: { String,
            required: true,
           type: Decimal},
    
    camera: { String,
            required: true,
           type: String},
    
    special: { String,
            required: true,
           type: String}
    
    
});
mongoose.model('Phone','phoneSchema')