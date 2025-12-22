import express from 'express'
import { registerCompany, companyLogin, getCompanyData, postjob, getCompanyJobApplicants, getCompanyPostedJobs, ChangeJobApplicationStatus, changeVisibility, forgotPassword , resetPassword} from '../controllers/companyController.js';
import upload from '../config/multer.js';
import {authCompany} from '../middlewares/authMiddleware.js'

const router = express.Router();

router.post('/register', upload.single('image'),  registerCompany)

router.post('/login', companyLogin)

router.get('/company', authCompany, getCompanyData)

//forget password route can be added here
router.post("/forgotpassword", forgotPassword);

//reset password route will be handled 
router.post("/resetpassword", resetPassword);

router.post('/postJobs', authCompany, postjob)

router.get('/applicants', authCompany,getCompanyJobApplicants)

router.get('/manage-jobs', authCompany,getCompanyPostedJobs)

router.post('/change-status',authCompany, ChangeJobApplicationStatus)

router.post('/change-visibility', authCompany,changeVisibility)

export default router;