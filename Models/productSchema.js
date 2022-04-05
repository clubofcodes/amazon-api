const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
});

const Products = mongoose.model("Product", productSchema);

module.exports = Products;