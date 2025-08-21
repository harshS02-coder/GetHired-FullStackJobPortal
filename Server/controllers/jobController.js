import Jobs from '../models/Jobs.js'

export const getAllJobs = async(req,res) =>{

    try {
        const jobs = await Jobs.find({visibility : true}).populate({path:'companyId', select :'-password'})
        res.json({success : true, jobs})
    } catch (error) {
        res.json({
            success:false,
            message : error.message
        })
    }
}

export const getJobsById = async(req, res) => {
    try{
        const jobId = req.params.id;
        const job = await Jobs.findById(jobId).populate({
            path : 'companyId',
            select : '-password'
        })

        if(!job){
            res.json({
                success:false,
                message:"Job doesn't exist"
            })
        }
        res.json({
            success : true,
            job})

    }catch(error){
        res.json({
            success: false,
            message:error.message
        })
    }
}