import React, { useState, useContext, useEffect } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import { assets, jobsApplied } from '../assets/assets';
import moment from 'moment'
import { AppContext } from '../context/AppContext';
import { useUser, useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import { toast } from 'react-toastify'

const Application = () => {

  const { user } = useUser()
  const { getToken } = useAuth()

  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null);

  const { backendUrl, userData, userApplication, fetchUserData, fetchUserAppliedJobs } = useContext(AppContext);

  const updateResume = async () => {

    try {
      const formData = new FormData()
      formData.append('resume', resume)

      const token = await getToken()
      console.log("Clerk Token:", token);
      const { data } = await axios.post(backendUrl + '/api/user/updateResume', formData, { headers: { Authorization: `Bearer ${token}` } })

      if (data.success) {
        toast.success(data.message)
        await fetchUserData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    setIsEdit(false)
    setResume(null)
  }

  useEffect(() => {
    if (user) {
      fetchUserAppliedJobs()
    }
  }, [user])

  return (
    <>
      <NavBar />
      <div className=' container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className='font-semibold text-xl'>Your Resume</h2>
        <div className='flex gap-3 mb-2 mt-2'>
          {
            isEdit || userData && userData.resume === ""
              ? (
                <>
                  <label className='flex items-center gap-2' htmlFor="resumeUpload">
                    <p className='bg-gray-200 text-blue-600 px-4 py-2 rounded-lg mr-2'>{resume ? resume.name : "Select Resume"}</p>
                    <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
                    <img className='cursor-pointer' src={assets.profile_upload_icon} alt="upload icon" />
                  </label>
                  <button onClick={(updateResume)} className='bg-green-200 text-black-600 px-4 py-2 rounded-lg mr-2'>Save</button>
                </>
              ) : (
                <div className='flex gap-3'>
                  <a target="_blank" href={userData.resume} className='bg-blue-100 text-blue-600 px-3 py-2 border rounded-lg'>Resume
                </a>
                  <button onClick={() => setIsEdit(true)} className="btn btn-light rext-gray-500 border-gray-300 rounded:lg">Update</button>
                </div>
              )
          }
        </div>
        <div className="mt-4 w-full border rounded-lg border-gray-300 shadow-lg bg-[linear-gradient(135deg,_#bfdbfe,_#93c5fd,_#818cf8)]">
  <h2 className="font-semibold text-xl mt-2 ml-2">Jobs Applied</h2>

  <div className="overflow-x-auto">
    <table className="min-w-full mt-2 border-collapse">
      <thead className="bg-blue-200">
        <tr>
          <th className="py-3 px-4 border-b text-left">Company</th>
          <th className="py-3 px-4 border-b text-left">Job Title</th>
          <th className="py-3 px-4 border-b text-left max-sm:hidden">Location</th>
          <th className="py-3 px-4 border-b text-left max-sm:hidden">Applied Date</th>
          <th className="py-3 px-4 border-b text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {(userApplication && userApplication.length > 0) ? (
          userApplication.map((job, index) => (
            <tr key={index} className="bg-white"> 
              <td className="py-3 px-4 border-b flex items-center gap-2">
                <img
                  src={job.companyId?.image}
                  alt="company logo"
                  className="w-8 h-8 object-cover rounded"
                />
                {job.companyId?.name}
              </td>
              <td className="py-3 px-4 border-b">{job.jobId?.jobTitle}</td>
              <td className="py-3 px-4 border-b max-sm:hidden">{job.jobId?.location}</td>
              <td className="py-3 px-4 border-b max-sm:hidden">{moment(job.date).format("ll")}</td>
              <td className="py-3 px-4 border-b">
                <span
                  className={`px-4 py-1.5 rounded ${
                    job.status === "Accepted"
                      ? "bg-green-100 text-green-600"
                      : job.status === "Rejected"
                      ? "bg-red-100 text-red-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {job.status}
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="py-6 text-center text-gray-500 bg-white">
              No applications found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
<br></br>
        <Footer />
        </div>
    </>
      )
    }
    
export default Application 