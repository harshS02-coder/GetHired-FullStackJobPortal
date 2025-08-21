import React, { useContext, useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import { manageJobsData } from '../assets/assets';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from '../../node_modules/axios';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const ManageJobs = ()=>{
    const navigate = useNavigate();

    const {backendUrl, companyToken} = useContext(AppContext)
    const [jobs, setJobs] = useState(false)

    const fetchCompanyJobs = async () => {

        try {
            
            const {data} = await axios.get(backendUrl+'/api/company/manage-jobs', { headers: { Authorization: `Bearer ${companyToken}` } })

            if(data.success){
                console.log(data.jobsData)
                setJobs(data.jobsData)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    //function to change visibility of job

    const changeJobVisibility = async (jobId)=>{


        try {
            const {data} = await axios.post(backendUrl+'/api/company/change-visibility',{jobId}, {headers:{token:companyToken}})

            if(data.success){
                toast.success(data.message)
                fetchCompanyJobs()
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }
    
    useEffect(()=>{
        if(companyToken){
            fetchCompanyJobs()
        }
    },[companyToken])

    return jobs ? jobs.length === 0 ? (
    <div className='flex items-center justify-center h-[70vh]'>
        <p className='text-2xl sm:text-2xl'>No Jobs Available or Posted</p>
    </div>) : (
        <div className='container p-4 max-auto'>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Jobs</h2>
            <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
                    <thead className="bg-blue-100 text-gray-800 text-xs sm:text-sm rounded-t-2xl">
                        <tr className='border-b'>
                            <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
                            <th className='py-2 px-4 border-b text-left'>Job Title</th>
                            <th className='py-2 px-4 border-b text-left max-sm:hidden'>Date</th>
                            <th className='py-2 px-4 border-b text-left max-sm:hidden'>Location</th>
                            <th className='py-2 px-4 border-b text-center'>Applicants</th>
                            <th className='py-2 px-4 border-b text-left'>Visible</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((jobs, index)=>(
                            <tr key  ={index}>
                                <td className="px-4 sm:px-6 py-4 max-sm:hidden">{index+1}</td>
                                <td className="px-4 sm:px-6 py-4">{jobs.jobTitle}</td>
                                <td className="px-4 sm:px-6 py-4 max-sm:hidden">{moment(jobs.date).format('ll')}</td>
                                <td className="px-4 sm:px-6 py-4 max-sm:hidden">{jobs.location}</td>
                                <td className="px-4 sm:px-6 py-4">{jobs.applicants}</td>
                                <td className="px-4 sm:px-6 py-4">
                                    <input onChange = {() => changeJobVisibility(jobs._id)} className='scale-125 ml-4' type ="checkbox" checked={jobs.visibility} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-right mt-3">
                <button onClick={e=>navigate('/dashboard/addJobs')} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300'>Add Jobs</button>
            </div>
        </div>
    ) : <Loading/>
}

export default ManageJobs