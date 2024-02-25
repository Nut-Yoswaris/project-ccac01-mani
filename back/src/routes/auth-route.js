const express = require("express") ;
const router = express.Router() ; 
const authController = require("../controller/auth-controller")
const authenticate = require("../middlewares/authenticate")

router.post('/register' , authController.register)
router.post('/login' , authController.login)
router.get("/me" , authenticate , authController.getme)
router.put("/me/put" , authenticate , (req, res,  next) => {
    res.json({message : "Edit Profile Users"})
})

module.exports = router ; 