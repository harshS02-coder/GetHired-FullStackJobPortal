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
    const logout = async () => {
        setCompanyToken(null)
        navigate('/')
        setCompanyData(null)
        localStorage.removeItem('companyToken')
    }

    useEffect(() => {
        if (companyData) {
            navigate('/dashboard/addJobs')
        }
    }, [companyData])

    //     return (
    //         <div className='min-h-screen'>

    //             <div className='shadow py-2'>
    //                 <div className='px-6 flex justify-between items-center'>
    //                     <img onClick={e => navigate('/')} className="h-50 sm:h-10 md:h-12 w- object-contain"
    //                     style={{
    //                         maxWidth: '180px',
    //                         minHeight: '32px'
    //                     }} src={assets.getHired} />
    //                     {companyData &&
    //                         <div className='flex items-center gap-3'>
    //                             <p className='max-sm:hidden mr-0'>Welcome, {companyData.name}</p>
    //                             <div className='relative group'>
    //                                 <img className='w-8 border rounded-full ml-0' src={companyData.image} />
    //                                 <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
    //                                     <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
    //                                         <li onClick = {logout}  className='px-2 py-1 cursor-pointer pr-10'>Logout</li>
    //                                     </ul>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     }
    //                 </div>
    //             </div>
    //             <div className='flex items-start'>
    //                 {/* left side bar */}
    //                 <div className='inline-block min-h-screen border-r-2 w-38 '>
    //                     <ul className='flex flex-col items-start pt-5 text-gray-800'>
    //                         <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/addJobs'}>
    //                             <img className='w-6 mr-2 rounded' src={assets.add_icon} />
    //                             <p className='max-sm:hidden'>Add Jobs</p>
    //                         </NavLink>

    //                         <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/manageJobs'}>
    //                             <img className='w-6 mr-2 rounded' src={assets.home_icon} />
    //                             <p className='max-sm:hidden'>Manage Jobs</p>
    //                         </NavLink>

    //                         <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/viewApplications'}>
    //                             <img className='w-6 mr-2 rounded' src={assets.person_tick_icon} />
    //                             <p className='max-sm:hidden'>View Applications</p>
    //                         </NavLink>
    //                     </ul>
    //                 </div>
    //                 <div className='flex-1 h-full p-2 sm:p-5'>
    //                     <Outlet />
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // export default Dashboard


    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10'>
            {/* Header */}
            <div className='bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/60 py-4'>
                <div className='px-6 flex justify-between items-center'>
                    {/* Logo */}
                    <div
                        onClick={e => navigate('/')}
                        className="cursor-pointer group relative"
                    >
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <img
                            className="relative h-8 sm:h-10 md:h-12 object-contain transform group-hover:scale-105 transition-transform duration-300"
                            style={{
                                maxWidth: '180px',
                                minHeight: '32px'
                            }}
                            src={assets.getHired}
                            alt="GetHired"
                        />
                    </div>

                    {/* Company Info */}
                    {companyData &&
                        <div className='flex items-center gap-4'>
                            <p className='max-sm:hidden mr-0 text-slate-700 font-medium bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'>
                                Welcome, {companyData.name}
                            </p>
                            <div className='relative group'>
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                <img
                                    className='relative w-10 h-10 border-2 border-white rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300'
                                    src={companyData.image}
                                    alt={companyData.name}
                                />
                                {/* Dropdown Menu */}
                                <div className='absolute hidden group-hover:block top-full right-0 z-50 mt-2 min-w-[120px]'>
                                    <div className='bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/60 p-2'>
                                        <ul className='list-none m-0'>
                                            <li
                                                onClick={logout}
                                                className='px-4 py-3 cursor-pointer text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-all duration-200 font-medium flex items-center gap-2'
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                Logout
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            {/* Main Content */}
            <div className='flex items-start'>
                {/* Sidebar Navigation */}
                <div className='inline-block min-h-screen border-r border-slate-200/60 bg-white/60 backdrop-blur-sm w-48 lg:w-56'>
                    <ul className='flex flex-col items-start pt-6 text-slate-800'>
                        <NavLink to="/dashboard/addJobs">
                            {({ isActive }) => (
                                <div
                                    className={`flex items-center p-4 lg:px-6 w-full group transition-all duration-300 hover:bg-white/80 hover:shadow-md ${isActive
                                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50/50 border-r-4 border-blue-500 shadow-sm'
                                            : 'hover:border-r-2 hover:border-slate-300/60'
                                        }`}
                                >
                                    <div
                                        className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${isActive
                                                ? 'bg-blue-100 text-blue-600'
                                                : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                                            }`}
                                    >
                                        <img className="w-5 h-5" src={assets.add_icon} alt="Add Jobs" />
                                    </div>

                                    <p className="ml-3 font-medium text-sm lg:text-base max-sm:hidden transition-colors duration-300 group-hover:text-slate-900">
                                        Add Jobs
                                    </p>
                                </div>
                            )}
                        </NavLink>


                        <NavLink to="/dashboard/manageJobs">
                            {({ isActive }) => (
                                <div
                                    className={`flex items-center p-4 lg:px-6 w-full group transition-all duration-300 hover:bg-white/80 hover:shadow-md ${isActive
                                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50/50 border-r-4 border-blue-500 shadow-sm'
                                            : 'hover:border-r-2 hover:border-slate-300/60'
                                        }`}
                                >
                                    <div
                                        className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${isActive
                                                ? 'bg-blue-100 text-blue-600'
                                                : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                                            }`}
                                    >
                                        <img className="w-5 h-5" src={assets.home_icon} alt="Manage Jobs" />
                                    </div>

                                    <p className="ml-3 font-medium text-sm lg:text-base max-sm:hidden transition-colors duration-300 group-hover:text-slate-900">
                                        Manage Jobs
                                    </p>
                                </div>
                            )}
                        </NavLink>


                        <NavLink to="/dashboard/viewApplications">
                            {({ isActive }) => (
                                <div
                                    className={`flex items-center p-4 lg:px-6 w-full group transition-all duration-300 hover:bg-white/80 hover:shadow-md ${isActive
                                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50/50 border-r-4 border-blue-500 shadow-sm'
                                            : 'hover:border-r-2 hover:border-slate-300/60'
                                        }`}
                                >
                                    <div
                                        className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${isActive
                                                ? 'bg-blue-100 text-blue-600'
                                                : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                                            }`}
                                    >
                                        <img
                                            className="w-5 h-5"
                                            src={assets.person_tick_icon}
                                            alt="View Applications"
                                        />
                                    </div>

                                    <p className="ml-3 font-medium text-sm lg:text-base max-sm:hidden transition-colors duration-300 group-hover:text-slate-900">
                                        View Applications
                                    </p>
                                </div>
                            )}
                        </NavLink>

                    </ul>
                </div>

                {/* Content Area */}
                <div className='flex-1 h-full p-4 sm:p-6 lg:p-8 bg-transparent'>
                    <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 min-h-[calc(100vh-120px)]'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
