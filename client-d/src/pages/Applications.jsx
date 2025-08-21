import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import { assets, jobsApplied } from '../assets/assets';
import moment from 'moment'

const Application = () => {

  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null);

  return (
    <>
      <NavBar />
      <div className=' container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        <h2 className='font-semibold text-xl'>Your Resume</h2>
        <div className='flex gap-3 mb-2 mt-2'>
          {
            isEdit ? (
              <>
                <label className='flex items-center gap-2' htmlFor="resumeUpload">
                  <p className='bg-gray-200 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
                  <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
                  <img className='cursor-pointer' src={assets.profile_upload_icon} alt="upload icon" />
                </label>
                <button onClick={() => setIsEdit(false)} className='bg-green-200 text-black-600 px-4 py-2 rounded-lg mr-2'>Save</button>
              </>
            ) : (
                <div className='flex gap-3'>
                  <a href="#" className='bg-blue-100 text-blue-600 px-3 py-2 border rounded-lg'>Resume
                </a>
                  <button onClick={() => setIsEdit(true)} className="btn btn-light rext-gray-500 border-gray-300 rounded:lg">Update</button>
                </div>
              )
          }
        </div>
        <div className='min-h-[60vh] mt-4 w-full border rounded-lg border-gray-300 shadow-lg bg-[linear-gradient(135deg,_#bfdbfe,_#93c5fd,_#818cf8)]'>
          <h2 className='font-semibold text-xl mt-2 ml-2'>Jobs Applied</h2>
          <table className='min-w-full px-2 mt-2 bg-[linear-gradient(135deg,_#bfdbfe,_#93c5fd,_#818cf8)]'>
            <thead>
              <tr>
                <th className='py-3 px-4 border-b text-left' scope="col">Company</th>
                <th className='py-3 px-4 border-b text-left' scope="col">Job Title</th>
                <th className='py-3 px-4 border-b text-left max-sm:hidden' scope="col">Location</th>
                <th className='py-3 px-4 border-b text-left max-sm:hidden' scope="col">Applied Date</th>
                <th className='py-3 px-4 border-b text-left' scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* job.jobId is not working so just put true directly and it will be checked later on at the time of backend */}
              {jobsApplied.map((job , index)=> true ? (  
                <tr className='border border-gray-300 '>
                  <td className='py-3 px-4 flex items-center gap-2 border-b'>
                    <img src = {job.logo} />
                    {job.company} 
                  </td>
                  <td className='py-3 px-4 border-b'>{job.title}</td>
                  <td className='py-3 px-4  border-b'>{job.location}</td>
                  <td className='py-3 px-4  border-b max-sm:hidden'>{moment(job.date).format("ll")}</td>
                  <td className='py-3 px-4 border-b max-sm:hidden'>
                  <span className={`${job.status === 'Accepted' ? 'bg-green-100' : job.status === 'Rejected' ? 'bg-red-100' : 'bg-blue-100'}px-4 py-1.5 rounded`}>
                    {job.status}
                  </span>
                  </td>
                </tr>
              ):(null) )}
            </tbody>
            </table>
        </div>
        </div> 
        <Footer/>
    </>
      )
    }
    
export default Application 