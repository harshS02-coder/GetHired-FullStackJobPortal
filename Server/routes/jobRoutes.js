import express from 'express'
import { getAllJobs, getJobsById } from '../controllers/jobController.js';

const router = express.Router();

//getting all jobs
router.get('/', getAllJobs)

//getting jobs by their ids
router.get('/:id', getJobsById)

export default router;