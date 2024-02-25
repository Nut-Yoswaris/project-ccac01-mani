const express = require("express")
const router = express.Router() ; 
const authenticate = require("../middlewares/authenticate")
const imageResController = require("../controller/imageRes-controller")
const upload = require("../middlewares/upload")


router.get("/" , imageResController.getPhotosRes)
router.post('/upload', upload.single('file'),  imageResController.postPhotosRes)
router.delete('/:id' , imageResController.deletePhotosRes)

module.exports = router ; 

