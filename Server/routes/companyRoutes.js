import express from 'express'
import { registerCompany, companyLogin, getCompanyData, postjob, getCompanyJobApplicants, getCompanyPostedJobs, ChangeJobApplicationStatus, changeVisibility } from '../controllers/companyController.js';
import upload from '../config/multer.js';
import {authCompany} from '../middlewares/authMiddleware.js'

const router = express.Router();

router.post('/register', upload.single('image'),  registerCompany)

router.post('/login', companyLogin)

router.get('/company', authCompany, getCompanyData)

router.post('/postJobs', authCompany, postjob)

router.get('/applicants', authCompany,getCompanyJobApplicants)

router.get('/manage-jobs', authCompany,getCompanyPostedJobs)

router.post('/change-status',authCompany, ChangeJobApplicationStatus)

router.post('/change-visibility', authCompany,changeVisibility)

export default router;