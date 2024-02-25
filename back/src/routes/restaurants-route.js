const express = require("express") ; 
const router = express.Router() ; 
const authenticate  = require("../middlewares/authenticate")
const restaurantsController = require("../controller/restaurants-controller")
const upload = require("../middlewares/upload")

// ส่วนของการดึงข้อมูลร้าน เพิ่มร้าน ลบ ร้าน 
router.get("/" , restaurantsController.getRestaurants)
router.get("/:name" , restaurantsController.getRestaurantsById )
// เพิ่ม ร้านเข้าไป 
router.post("/" , authenticate , restaurantsController.postCreateRestaurants)
router.put("/edit/:id" , authenticate,restaurantsController.updateRestaurants)
router.delete("/:id" , authenticate , restaurantsController.deleteRestaurants)

// ส่วนของการเพิ่ม Review และ Photos ของร้านนั้น  ๆ 
router.post('/:name/reviews' , restaurantsController.postReviewsRestaurants)
router.post('/:name/photos' , upload.single('file') , (req , res , next) => {
    res.json({message : "Create Photos Restaurants"})
})
// ดึงรูปภาพและคอมเม้นของร้านนั้นมาดู
router.get('/:name/reviews' , authenticate, (req , res , next) => {
    res.json({message : " Get Comment for Restaurants"})
})
router.get("/:name/photos" , authenticate, restaurantsController.postReviewPhotos)
router.get('/:category' , (req , res , next) => {
    res.json({message : " Get Group Restaurants "})
})

// ลบ Review ลบ photos
router.delete('/:name:reviews/:id' , (req, res ,next) => {
    res.json({message : " Delete Review Restaurants By ID"})
})
router.delete('/:name/photos/:id' , (req, res , next) => {
    res.json({message : "Delete photos Restaurants By ID"})
})


module.exports = router ; 
