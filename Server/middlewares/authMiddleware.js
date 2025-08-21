import jwt from 'jsonwebtoken'
import Company from '../models/Company.js'

export const authCompany = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.json({
            success: false,
            message: "Not authorised, Login again"
        });
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.company = await Company.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}