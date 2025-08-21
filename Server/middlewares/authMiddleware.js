import jwt from 'jsonwebtoken'
import Company from '../models/Company.js'

export const authCompany = async(req, res, next) =>{
    const token = req.headers.token

    if(!token){
        return res.json({
            success: false,
            message : "Not autorised, Login again"
        })
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.company = await Company.findById(decoded.id).select('-password')//that select method will                                                                           remove the password from data

        next()

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}