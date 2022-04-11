require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./Database/Connect");
const cors = require("cors");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");

const Products = require("./Models/productSchema");

// const DefaultData = require("./defaultData");

app.use(express.json({ extended: false }));
app.use(cookieParser(""));

// 'https://amazon-api.vercel.app',
app.use(cors({ credentials: true, origin: ['http://localhost:3000','https://fy-amazon-clone.vercel.app'] }));
app.use("/api", router);

app.listen(process.env.PORT || 3575, () => {
    console.log(`Server is running on port number ${process.env.PORT || 3575}`);
});

// DefaultData();