const mongoose = require("mongoose");
const schema = mongoose.Schema({
    id:String,
    name:String,
    image:String,
    price:String,
    description:String,
});
module.exports = mongoose.model("cosmetic", schema);