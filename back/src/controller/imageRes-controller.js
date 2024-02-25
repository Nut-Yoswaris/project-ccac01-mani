const db = require("../config/prisma")
const multer  = require('multer')


module.exports.getPhotosRes = async (req , res , next) => {
    res.json({message : " Get Photos All"})
}

module.exports.postPhotosRes = async (req , res , next) => {
    // res.send(req.file)
    // res.json({message : " Upload Photos All"})
    console.log(req.file) 
}

module.exports.deletePhotosRes = async (req , res , next) => {
    res.json({message : " Delete Photos to Restaurants"})
}
