import React from 'react';
import NavBar from '../components/NavBar';
import { viewApplicationsPageData, assets } from '../assets/assets';

const ViewApplication = () => {
    return (
        <div className="p-4 container mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">View Applications</h2>

            <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
                <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
                    <thead className="bg-blue-100 text-gray-800 text-xs sm:text-sm rounded-t-2xl">
                        <tr className='border-b'>
                            <th className="px-4 sm:px-6 py-3 font-semibold">#</th>
                            <th className="px-4 sm:px-6 py-3 font-semibold">User Name</th>
                            <th className="px-4 sm:px-6 py-3 font-semibold max-sm:hidden">Job Title</th>
                            <th className="px-4 sm:px-6 py-3 font-semibold max-sm:hidden">Location</th>
                            <th className="px-4 sm:px-6 py-3 font-semibold">Resume</th>
                            <th className="px-4 sm:px-6 py-3 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {viewApplicationsPageData.map((applicant, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition duration-200">
                                <td className="px-4 sm:px-6 py-4">{index + 1}</td>
                                <td className="px-4 sm:px-6 py-4 flex items-center gap-3">
                                    <img
                                        src={applicant.imgSrc}
                                        alt="user"
                                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-300"
                                    />
                                    <span className="text-gray-800 font-medium">{applicant.name}</span>
                                </td>
                                <td className="px-4 sm:px-6 py-4 max-sm:hidden">{applicant.jobTitle}</td>
                                <td className="px-4 sm:px-6 py-4 max-sm:hidden">{applicant.location}</td>
                                <td className="px-4 sm:px-6 py-4">
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-300 text-white text-xs sm:text-sm rounded-xl shadow hover:bg-blue-700 transition"
                                    >
                                        <img src={assets.resume_download_icon} alt="download" className="w-4 h-4" />
                                        Resume
                                    </a>
                                </td>
                                <td className="px-4 sm:px-6 py-4 relative text-xs sm:text-sm">
                                    <div className="relative inline-block text-left group">
                                        <button
                                            className="p-1.5 rounded-full hover:bg-gray-200 transition duration-200"
                                            title="Actions"
                                        >
                                            ...
                                        </button>

                                        <div className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                                            <div className="py-1">
                                                <button className="block w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 rounded-t-md">
                                                    Accept
                                                </button>
                                                <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-b-md">
                                                    Reject
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;
