import User from "../models/Users.js";
import Application from "../models/JobApplications.js";
import Jobs from "../models/Jobs.js";
import {v2 as cloudinary } from 'cloudinary'
import { ResumeuploadToCloudinary } from "../utils/cloudinaryUpload.js";


//get user's data
export const getUserData = async (req, res) => {
    const clerkUserId = req.auth.userId; 
  
    try {
      const user = await User.findOne({ clerkId: clerkUserId }); 
      if (!user) {
        return res.json({
          success: false,
          message: "User not found",
        });
      }
  
      res.json({
        success: true,
        user,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };
  

//apply jobs
export const applyJobs = async(req, res) => {
    const { jobId } = req.body;
    const clerkId = req.auth.userId; 

    try {
        
        const user = await User.findOne({ clerkId });

        if (!user) {
            return res.json({
                success: false,
                message: 'User not found'
            });
        }

        const userId = user._id; // Converted into objectID

        // Check if the user has already applied
        const alreadyApplied = await Application.findOne({ jobId, userId });

        if (alreadyApplied) {
            return res.json({
                success: false,
                message: 'Already applied'
            });
        }

        const jobData = await Jobs.findById(jobId);

        if (!jobData) {
            return res.json({
                success: false,
                message: 'Job not found'
            });
        }

        // Creating the new application with the right ObjectId
        await Application.create({
            userId,
            companyId: jobData.companyId,
            jobId,
            status: "pending",
            date: Date.now()
        });

        res.json({
            success: true,
            message: "Applied successfully",
        });
    } catch(error) {
       res.json({message: error.message}); 
    }
};

//get applicant applied jobs
export const jobsApplied = async (req, res) => {

  try {
    const clerkId = req.auth.userId;  
    const user = await User.findOne({ clerkId });

        if (!user) {
            return res.json({
                success: false,
                message: 'User not found'
            });
        }

    const userId = user._id; 

    const applications = await Application.find({ userId })
      .populate("companyId", "name email image")
      .populate("jobId", "jobTitle description location category level salary");

    res.json({ success: true, applications });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

  

//updating resume
// export const updateUserProfile = async (req, res) => {
//     try {
//       const clerkUserId = req.auth.userId;
//       console.log("Clerk userId:", clerkUserId);
  
      
//       const resumeFile = req.file;  
  
//       const userData = await User.findOne({ clerkId: clerkUserId });
  
//       if (!userData) {
//         return res.status(404).json({
//           success: false,
//           message: "User not found",
//         });
//       }
  
//       if (resumeFile) {
//         const resumeUpload = await cloudinary.uploader.upload(resumeFile.path, {
//           folder: "resumes",
//           resource_type: "raw", 
//         });
//         userData.resume = resumeUpload.secure_url;
//       }
  
//       await userData.save();
  
//       res.json({
//         success: true,
//         message: "Resume Updated",
//         resume: userData.resume,
//       });
//     } catch (error) {
//       console.error("Error in updateUserProfile:", error);
//       res.status(500).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };


export const updateUserProfile = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    console.log("Clerk userId:", clerkUserId);

    const resumeFile = req.file;

    const userData = await User.findOne({ clerkId: clerkUserId });

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (resumeFile) {
      const resumeUpload = await ResumeuploadToCloudinary(resumeFile.buffer);
      userData.resume = resumeUpload.secure_url;
    }

    await userData.save();

    res.json({
      success: true,
      message: "Resume Updated",
      resume: userData.resume,
    });

  } catch (error) {
    console.error("Error in updateUserProfile:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

  