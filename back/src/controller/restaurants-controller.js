// const db = require("../config/prisma") 
const db = require("../config/prisma")

module.exports.getRestaurants = async (req , res , next) => {
    try{
        const restaurants = await db.restaurants.findMany()
        res.json({restaurants})
    }catch(err){
        next(err)
    }
}

module.exports.getRestaurantsById = async ( req , res , next) => {
    try{
        const {name} = req.params ; 
        const restaurants = await db.restaurants.findFirst({
            where : {
                 name 
            }
        })
        res.json({restaurants})
    }catch(err){
        next(err)
    }
}

module.exports.postCreateRestaurants = async (req , res , next) => {
    const data = req.body
    try{
        const rs = await db.restaurants.create({
            data : {...data}      
        })
        res.json({message : " Create OK " , result : rs})
    }catch(err){
        next(err)
    }
}

module.exports.postReviewsRestaurants = async ( req , res , next) => {
    try{
        const data = req.body
        // const rs = await db.review_restaurants.create({
        //     data : {...data}
        // })
        res.json({message : " Create OK " , data})
    }catch(err){
        next(err)
    }
}


module.exports.postReviewPhotos = async ( req , res , next) => {
    try {
        res.json({message : "Review Photos"})
    }catch(err) {
        next(err)
    }
}

module.exports.updateRestaurants = async ( req , res , next) => {
        const {id} = req.params ; 
        const data = req.body;
    try {
        const rs = await db.restaurants.update({
            data : {...data } ,
            where : {id : +id}
        })
        res.json({message : "Update Restaurants"})
    }catch(err) {
        next(err)
    }
}

module.exports.deleteRestaurants = async ( req , res , next) => {
    const {id} = req.params
    try {
        const rs = await db.restaurants.delete({
            where : {
                id : parseInt(id)
            }
        })
        res.json({message : "Delete Restaurants" , result : rs})
    }catch(err) {
        next(err)
    }
}

