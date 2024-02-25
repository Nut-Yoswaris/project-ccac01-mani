const bcrypt = require("bcryptjs")
const db = require("../config/prisma")
const password = bcrypt.hashSync('123456')

const userData = [ 

    {username : "admin" , password , email : "admin@ggg.mail" , description : "Andy Hello World" , userType : "ADMIN"} ,
    {username : "andy" , password , email : "andy@ggg.mail" , description : "Andy Hello World"} ,
    {username : "bobby" , password , email : "bobby@ggg.mail" , description : "Bobby Hello World"} ,
    {username : "candy" , password , email : "candy@ggg.mail" , description : "Candy Hello World"} ,
]

const restaurantsData = [ 
    {name : "STAY-cafeforrestkk" , description : "AAAAAAAAAAAAAAAAAA" , type : "CAFE"} , 
    {name : "สวนอาหารคานบุญ" , description : "BBBBBBBBBBBBBBB" , type : "RESTAURANTS"} , 
    {name : "แจ่ม Cafe&Eatery" , description : "CCCCCCCCCCCCCCCCCC" , type : "CAFE"} , 
    {name : "Garden Seen" , description : "DDDDDDDDDDDDDDDDDDD" , type : "CAFE"} , 
    {name : "สีนวลคาเฟ่" , description : "EEEEEEEEEEEEEEEEEEEEEEEEEE" , type : "CAFE"} , 
]

const run = async () => {
    await db.user.createMany({
        data : userData
    })
    await db.restaurants.createMany({
        data : restaurantsData
    })
}

run()