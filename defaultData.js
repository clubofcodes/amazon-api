const Products = require("./Models/productSchema");
const productsData = require("./Database/productsData");

const DefaultData = async () => {
    try {
        //Will prevent from repeating of data storing.
        await Products.deleteMany({});
        //Storing data in mongodb collection.
        const storeData = await Products.insertMany(productsData);
        // console.log(storeData);
    } catch (error) {
        console.log("Error", error.message);
    }
}

module.exports = DefaultData;