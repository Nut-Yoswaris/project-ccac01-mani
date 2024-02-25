require("dotenv").config();
const express = require("express");
const cors = require("cors") ; 

const error = require("./middlewares/error")
const notFound = require("./middlewares/notFound")
const authRoute = require("./routes/auth-route") 
const restaurantsRoute = require("./routes/restaurants-route")

const app = express();

app.use(cors());
app.use(express.json());


app.use("/auth" , authRoute) ; 
app.use("/restaurants" , restaurantsRoute)


app.use(error);
app.use("*" ,notFound);

const port = process.env.PORT || 8000
app.listen(port , () => {
    console.log("Run Server on Port 8000")
})