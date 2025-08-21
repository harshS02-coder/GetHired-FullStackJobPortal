import React from 'react'
import NavBar from '../components/NavBar';
import { manageJobsData } from '../assets/assets';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

const ManageJobs = ()=>{
    const navigate = useNavigate();
    return (
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
                        {manageJobsData.map((jobs, index)=>(
                            <tr key  ={index}>
                                <td className="px-4 sm:px-6 py-4 max-sm:hidden">{index+1}</td>
                                <td className="px-4 sm:px-6 py-4">{jobs.title}</td>
                                <td className="px-4 sm:px-6 py-4 max-sm:hidden">{moment(jobs.date).format('ll')}</td>
                                <td className="px-4 sm:px-6 py-4 max-sm:hidden">{jobs.location}</td>
                                <td className="px-4 sm:px-6 py-4">{jobs.applicants}</td>
                                <td className="px-4 sm:px-6 py-4">
                                    <input classNmae='scale-125 ml-4' type ="checkbox" />
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
    )
}

export default ManageJobs