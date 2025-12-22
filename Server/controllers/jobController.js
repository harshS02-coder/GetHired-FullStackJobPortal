//import redis from '../config/redis.js'
import Jobs from '../models/Jobs.js'

export const getAllJobs = async(req,res) =>{

    //first try hitting cache 
    try {
        // const cachedJobs = await redis.get('all_jobs');

        //   if (cachedJobs) {
        //     console.log("Serving from cache");
        //     return res.json({
        //         success: true,
        //         jobs: JSON.parse(cachedJobs)
        //     });
        // }
        // console.log("Fetching from DB");
        const jobs = await Jobs.find({visibility : true}).populate({path:'companyId', select :'-password'});
        //store in cache for future requests

        //await redis.set('all_jobs', JSON.stringify(jobs), 'EX', 300);
        //await redis.set('all_jobs', JSON.stringify(jobs), 'EX', 300);
        res.json({success : true, jobs})
        
    } catch (error) {
        res.json({
            success:false,
            message : error.message
        })
    }
}

// export const getJobsById = async(req, res) => {
//     try{
//         const jobId = req.params.id;
//         const job = await Jobs.findById(jobId).populate({
//             path : 'companyId',
//             select : '-password'
//         })

//         if(!job){
//             res.json({
//                 success:false,
//                 message:"Job doesn't exist"
//             })
//         }
//         res.json({
//             success : true,
//             job})

//     }catch(error){
//         res.json({
//             success: false,
//             message:error.message
//         })
//     }
// }

export const getJobsById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Jobs.findById(jobId)
      .select("jobTitle description location category salary level date visibility companyId") // include only needed fields
      .populate({
        path: "companyId",
        select: "name email location image website", // select SAFE & necessary fields only
      })
      .lean(); // SUPER IMPORTANT for speed

    if (!job) {
      return res.json({
        success: false,
        message: "Job doesn't exist",
      });
    }

    return res.json({
      success: true,
      job,
    });

  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
