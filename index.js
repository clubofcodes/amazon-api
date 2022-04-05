const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json({ extended: false }));
app.use("/api", product);

app.listen(process.env.PORT || 3575, () => console.log(`Server is running on port number ${process.env.PORT || 3575}`));