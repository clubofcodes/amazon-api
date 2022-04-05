const router = require("express").Router();

//To get all products data from db.
router.get("/getproducts", async (req, res) => {
    try {
        res.json({ status: 200, msg: "Products data fetched" });
    } catch (error) {
        console.log("Error", error.message);
        return res.status(5000).send("Server error");
    }
});

module.exports = router;