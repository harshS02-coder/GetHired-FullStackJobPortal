//dashboard

import React, { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext'

const Dashboard = () => {

    const navigate = useNavigate()

    const { companyData, setCompanyToken, setCompanyData } = useContext(AppContext)

    //function for logging out
    const logout = async () =>{
        setCompanyToken(null)
        navigate('/')
        setCompanyData(null)
        localStorage.removeItem('companyToken')
    }

    useEffect(()=>{
        if(companyData){
            navigate('/dashboard/addJobs')
        }
    }, [companyData])

    return (
        <div className='min-h-screen'>

            <div className='shadow py-2'>
                <div className='px-6 flex justify-between items-center'>
                    <img onClick={e => navigate('/')} className="h-50 sm:h-10 md:h-12 w- object-contain"
                    style={{
                        maxWidth: '180px',
                        minHeight: '32px'
                    }} src={assets.getHired} />
                    {companyData &&
                        <div className='flex items-center gap-3'>
                            <p className='max-sm:hidden mr-0'>Welcome, {companyData.name}</p>
                            <div className='relative group'>
                                <img className='w-8 border rounded-full ml-0' src={companyData.image} />
                                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                        <li onClick = {logout}  className='px-2 py-1 cursor-pointer pr-10'>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='flex items-start'>
                {/* left side bar */}
                <div className='inline-block min-h-screen border-r-2 w-38 '>
                    <ul className='flex flex-col items-start pt-5 text-gray-800'>
                        <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/addJobs'}>
                            <img className='w-6 mr-2 rounded' src={assets.add_icon} />
                            <p className='max-sm:hidden'>Add Jobs</p>
                        </NavLink>

                        <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/manageJobs'}>
                            <img className='w-6 mr-2 rounded' src={assets.home_icon} />
                            <p className='max-sm:hidden'>Manage Jobs</p>
                        </NavLink>

                        <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/viewApplications'}>
                            <img className='w-6 mr-2 rounded' src={assets.person_tick_icon} />
                            <p className='max-sm:hidden'>View Applications</p>
                        </NavLink>
                    </ul>
                </div>
                <div className='flex-1 h-full p-2 sm:p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard