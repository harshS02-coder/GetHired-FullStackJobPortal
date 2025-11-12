import express from 'express'
import { getUserData, applyJobs, jobsApplied, updateUserProfile } from '../controllers/userControllers.js';
import {upload} from '../config/multer.js';
import { requireAuth } from '@clerk/express';

const router = express.Router()

//get users routes
// get user data
router.get('/user', getUserData)

// apply jobs
router.post('/applyJob', requireAuth(), applyJobs)

//jobs applied bt applicant
router.get('/application',
requireAuth(),
jobsApplied)

//update user profile(resume)
router.post(
    "/updateResume",
    requireAuth(),
    upload.single("resume"),
    (req, res, next) => {
      console.log("Inside /updateResume route");
      console.log("User:", req.auth?.userId);
      console.log("File:", req.file);
      next();
    },
    updateUserProfile
  );

export default router