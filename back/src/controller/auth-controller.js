const bcrypt = require("bcryptjs")
const db = require("../config/prisma")
const jwt = require("jsonwebtoken")


module.exports.register = async (req, res ,next) => {
    const {username , password , confirmPassword , email} = req.body ; 
    try{
        // validation 
        //เช็คว่าข้อมูลที่เข้ามาใช่ username กับ password หรือไม่ 
        // เช็คว่า confirmpassword และ password ตรงกันหรือไม่ 
        if(!(username && password && confirmPassword)) {
            throw new Error ("Fulfill all inputs")
        }
        if(confirmPassword !== password) {
            throw new Error ("Confirm Password not Match")
        }

        const hashedPassword = await bcrypt.hash(password , 10)
        console.log(hashedPassword)

        // เก็บข้อมูล username , password  , email เก็บไว้ใน Object
        const data = {
            username , 
            password : hashedPassword , 
            email
        };

        const rs = await db.user.create({data})
        console.log(rs)

        res.json({message : " Register Successful"})
    }catch(err) {
        next(err)
    }
}

module.exports.login = async ( req , res , next) => {
    const {username , password} = req.body
    try {
        //validation
        if(!(username.trim() && password.trim())) {
            throw new Error ("username or password must not blank")
        }
        // ตรวจสอบว่าเป็น username ของใคร
        const user = await db.user.findFirstOrThrow({ where : {username}})
        // ตรวจสอบว่าเป็น password ของใคร 
        const pwOK = await bcrypt.compare(password , user.password)
        if(!pwOK) {
            throw new Error("invalid Login")
        }
        // issue jwt token
        const payload = {id : user.id}
        const token = jwt.sign(payload , process.env.JWT_SECRET , {
            expiresIn : '30d'
        })

        console.log(token)
        res.json({token : token})
    }catch (err) {
        next(err)
    }
}

module.exports.getme = (req , res , next) => {
    res.json(req.user)
}