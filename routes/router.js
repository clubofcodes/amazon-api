const router = require("express").Router();
const Products = require("../Models/productSchema");
const Users = require("../Models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWTKEY;
const Authenticate = require("../Middleware/VerifyToken");

//To get all products data from db.
router.get("/getproducts", async (req, res) => {
    try {
        const productsData = await Products.find();
        res.send(productsData);
    } catch (error) {
        console.log("Error", error.message);
    }
});

//To register user for signup.
router.post("/register", async (req, res) => {
    console.log(req);
    const { fullname, email, mNumber, password, userRole, activeUser } = req.body;
    if (!fullname || !email || !mNumber || !password || !activeUser) {
        res.send({ error: "Fill all the details" });
        console.log("One of the input data is missing.");
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPswd = await bcrypt.hash(password, salt);

        try {
            const isEmail = await Users.findOne({ email: email });
            const isMobile = await Users.findOne({ mNumber: mNumber });
            if (isEmail) {
                res.status(322).json({ error: "Your provided Email " + email + " has already been used." });
            } else if (isMobile) {
                res.status(422).json({ error: "Account already exists with the mobile number " + mNumber });
            } else {
                const UserData = new Users({ fullname, email, mNumber, password: hashedPswd, userRole });
                await UserData.save();
                res.send(UserData);
            }
        } catch (error) {
            console.log("Signup Error:", error.message);
            res.send({ error });
        }
    }
});

//To get all users data from db.
router.get("/getusers", async (req, res) => {
    try {
        const usersData = await Users.find();
        res.send(usersData);
    } catch (error) {
        console.log("Error", error.message);
    }
});

//For user login.
router.patch("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.send({ error: "Fill all the details" });
    } else {
        try {
            const logedInUser = isNaN(email) ? await Users.findOne({ email: email }) : await Users.findOne({ mNumber: email });
            if (logedInUser) {
                const isMatch = await bcrypt.compare(password, logedInUser.password);
                if (!isMatch) res.send({ error: "Invalid Credentials" })
                else {
                    const token = jwt.sign({ _id: logedInUser._id }, secretKey);

                    res.cookie("AmazonClone", token, {
                        expires: new Date(Date.now() + 172800000),
                        httpOnly: true
                    })

                    res.header("auth-token", token);
                    logedInUser.tokens[0] = { token: token };
                    await logedInUser.save();
                    res.send(logedInUser);
                }
            } else res.send({ error: "User doesn't exist!!" });
        } catch (error) {
            console.log("Login Error:", error.message);
            res.send({ error });
        }
    }
});

//For user login and verifying token to store in cookie.
router.get("/validuser", Authenticate, async (req, res) => {
    try {
        const ValidCurrentUser = await Users.findOne({ _id: req.userID });
        console.log(ValidCurrentUser);
        res.send(ValidCurrentUser);
    } catch (error) {
        console.log(error + "error for valid user");
    }
});

//update user using objectid.
router.patch("/updateuser/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const updatedUserData = await Users.findByIdAndUpdate(_id, req.body, { new: true });
        res.send({ msg: "User Updated", updated: updatedUserData });
    } catch (error) {
        // console.log("Login Error:", error.message);
        res.status(400).send(error.message);
    }
});

//For user logout
router.get("/logout", Authenticate, async (req, res) => {
    try {
        req.currentUser.tokens = req.currentUser.tokens.filter((curelem) => curelem.token !== req.token);
        res.clearCookie("AmazonClone", { path: "/" });
        req.currentUser.save();
        res.send(req.currentUser.tokens);
        console.log("user logout");

    } catch (error) {
        console.log(error);
    }
});

//To get individual product data.
router.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const individual = await Products.findOne({ "title.longTitle": id });
        res.send(individual);
    } catch (error) {
        res.send(error);
    }
});

//To add products.
router.post("/addproduct/", async (req, res) => {

    const { url, detailUrl, title, price, description, discount, tagline } = req.body;

    if (!url || !detailUrl || !title || !price || !description || !discount || !tagline) {
        res.send({ error: "Fill all the details" });
        console.log("One of the input data is missing.");
    } else {

        const productsDBData = await Products.findOne({ url: url });

        if (productsDBData) {
            res.send({ msg: "Same product is already available!!" });
        } else {

            const allProducts = await Products.find();
            // console.log(allProducts.length);

            const newProductId = allProducts[allProducts.length - 1].id.slice(0, 7) + (allProducts?.length + 1)

            try {
                const productData = new Products({
                    id: newProductId,
                    url, detailUrl,
                    title: {
                        shortTitle: title.shortTitle,
                        longTitle: title.longTitle
                    }, price: {
                        mrp: price.mrp,
                        cost: price.cost,
                        discount: price.discount
                    }, description, discount, tagline
                });
                await productData.save();
                res.send(productData);
            } catch (error) {
                res.send(error);
            }
        }
    }

});

//update product using it's objectid. (Pending)
router.patch("/updateproduct/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        // console.log(_id, req.body, req.params, req.query);
        const allProducts = await Products.findOne({ _id });

        if (allProducts) {
            const productData = await Products.findByIdAndUpdate(_id, { ...req.body, id: allProducts.id }, { new: true });
            res.send(productData);
        } else {
            res.send({ error: "Product Not found!!" });
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
});

//To remove item from the cart
router.delete("/removeproduct/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        await Products.findByIdAndDelete(_id);

        res.send({ msg: "Product removed successfully" });
    } catch (error) {
        res.send(error.message);
    }
});

//For adding the data into cart
router.post("/addtocart/:id", Authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const cartProduct = await Products.findOne({ "title.longTitle": id });

        const logedInUserData = await Users.findOne({ _id: req.userID });

        if (logedInUserData && cartProduct) {
            if (logedInUserData.carts.length > 0) {
                let isDuplicate = false;
                for (var i = 0; i < logedInUserData.carts.length; i++) {
                    if (req.body.id === logedInUserData.carts[i].id) {
                        logedInUserData.carts[i] = req.body;
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) logedInUserData.carts = await logedInUserData.carts.concat(req.body);
            } else logedInUserData.carts = await logedInUserData.carts.concat(req.body);

            await logedInUserData.save();
            res.send(logedInUserData);
            // console.log(JSON.stringify(logedInUserData?.carts, null, 2));
        } else res.send({ error: "User Not Logedin or doesn't exist!!" });
    } catch (error) {
        console.log(error);
    }
});

//To get data from the cart
router.get("/cartdetails", Authenticate, async (req, res) => {
    try {
        const logedInUserCartData = await Users.findOne({ _id: req.userID });
        res.send(logedInUserCartData);
    } catch (error) {
        res.send(error);
    }
});

//To remove item from the cart
router.get("/removeitem/:id", Authenticate, async (req, res) => {
    try {
        const { id } = req.params;

        req.currentUser.carts = req.currentUser.carts.filter((item) => {
            return item.id != id
        });

        req.currentUser.save();
        res.send(req.currentUser);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;