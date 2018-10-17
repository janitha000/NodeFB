const mongoose = require('mongoose');
const Schema = mongoose.schema;

PostSchema = new Schema({
    name : String,
    content : String 
})

module.exports = mongoose.model('Post', PostSchema);