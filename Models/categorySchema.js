
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    category:{
        type: String,
        required: true,
        minlength: 3
    }
});

const Catagories = mongoose.model("Categories", categorySchema);

module.exports = Catagories;