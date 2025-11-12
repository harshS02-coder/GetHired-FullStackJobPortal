// import React, { useState, useContext, useEffect } from 'react'
// import NavBar from '../components/NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useParams, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';
// import Loading from '../components/Loading';
// import { assets, jobsData } from '../assets/assets';
// import kconvert from 'k-convert'
// import moment from 'moment'
// import JobCard from '../components/JobCard'
// import Footer from '../components/Footer'
// import axios from 'axios';
// import { toast } from 'react-toastify'
// import { useAuth } from '@clerk/clerk-react'

// const ApplyJobs = () => {
//   const { id } = useParams();

//   const navigate = useNavigate();
//   const { getToken } = useAuth()
//   const [JobsData, setJobsData] = useState(null);
//   const [isAlreadyApplied, setIsAlreadyApplied] = useState(false)
//   const { jobs, backendUrl, userData, userApplication, fetchUserAppliedJobs } = useContext(AppContext);

//   const fetchJobs = async () => {

//     try {
//       const { data } = await axios.get(backendUrl + `/api/jobs/${id}`)
//       if (data.success) {
//         setJobsData(data.job)
//         console.log(data.job)
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   };

//   //apply job handler

//   const applyHandler = async () => {

//     try {
//       if (!userData) {
//         return toast.error('Login to apply for jobs')
//       }

//       if (!userData.resume) {
//         navigate('/applications')
//         return toast.error('Upload your resume')
//       }

//       const token = await getToken();

//       const { data } = await axios.post(backendUrl + '/api/user/applyJob',
//         { jobId: JobsData._id }, { headers: { Authorization: `Bearer ${token}` } })

//       if (data.success) {
//         toast.success(data.message);
//         fetchUserAppliedJobs()
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   //checking jobs already applied or not
//   const checkJobsApplied = async () => {

//     const hasApplied = userApplication.some(item => item.jobId._id === JobsData._id)
//     setIsAlreadyApplied(hasApplied);

//   }


//   useEffect(() => {
//     fetchJobs();
//   }, [id]);

//   useEffect(() => {
//     if (userApplication.length > 0 && JobsData) {
//       checkJobsApplied()
//     }
//   }, [JobsData, userApplication, id])

//   return JobsData ? (
//     <>
//       <div className="flex flex-col min-h-screen">
//         <NavBar />
  
//         <main className="flex-grow">
//           <div className="py-10 container px-4 2xl:px-20 mx-auto">
//             <div className="bg-white text-black rounded-lg w-full">
//               {/* Top Section */}
//               <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-10 mb-6 bg-sky-50 border border-sky-400 rounded-xl mt-2">
               
//                 <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
//                   <img
//                     className="h-20 w-20 object-contain bg-white rounded-lg p-2 border"
//                     src={JobsData.companyId.image}
//                     alt="company-logo"
//                   />
  
//                   <div className="text-center md:text-left text-neutral-700">
//                     <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl">
//                       {JobsData.jobTitle}
//                     </h1>
  
//                     <div className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start text-gray-600">
//                       <span className="flex items-center gap-1">
//                         <img src={assets.suitcase_icon} className="h-4 w-4" />
//                         {JobsData.companyId.name}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <img src={assets.location_icon} className="h-4 w-4" />
//                         {JobsData.location}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <img src={assets.person_icon} className="h-4 w-4" />
//                         {JobsData.level}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <img src={assets.money_icon} className="h-4 w-4" />
//                         CTC: {kconvert.convertTo(JobsData.salary)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
  
//                 <div className="flex flex-col items-center md:items-end text-sm">
//                   <button
//                     onClick={applyHandler}
//                     type="button"
//                     className="btn btn-primary px-6 py-2 text-sm sm:text-base"
//                   >
//                     {isAlreadyApplied ? "Already applied" : "Apply now"}
//                   </button>
//                   <p className="mt-2 text-gray-600">
//                     Posted {moment(JobsData.date).fromNow()}
//                   </p>
//                 </div>
//               </div>
  
//               {/* Job Description + side bar of more jobs*/}
//               <div className="flex flex-col lg:flex-row gap-6 w-full mx-auto">
//                 <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-full lg:w-2/3">
//                   <h2 className="font-bold text-2xl mb-4">Job Description</h2>
//                   <div
//                     className="rich-text prose max-w-none"
//                     dangerouslySetInnerHTML={{ __html: JobsData.description }}
//                   ></div>
  
//                   <div className="mt-6 flex justify-center md:hidden">
//                     <button
//                       onClick={applyHandler}
//                       type="button"
//                       className="btn btn-primary px-6 py-2"
//                     >
//                       {isAlreadyApplied ? "Already applied" : "Apply now"}
//                     </button>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 rounded-lg shadow-md p-4 w-full lg:w-1/3">
//                   <h2 className="text-xl font-semibold mb-4">
//                     More Jobs from {JobsData.companyId.name}
//                   </h2>
  
//                   {(() => {
//                     let filteredJobs = jobs.filter(
//                       (job) =>
//                         job._id !== JobsData._id &&
//                         job.companyId._id === JobsData.companyId._id
//                     );
  
//                     const appliedJobs = new Set(
//                       userApplication.map((app) => app.jobId && app.jobId._id)
//                     );
//                     filteredJobs = filteredJobs.filter(
//                       (job) => !appliedJobs.has(job._id)
//                     );
  
//                     if (filteredJobs.length === 0) {
//                       return (
//                         <p className="text-gray-500 italic">
//                           No more jobs available from this company.
//                         </p>
//                       );
//                     }
  
//                     return filteredJobs.slice(0, 4).map((job, index) => (
//                       <div key={index} className="mb-4">
//                         <JobCard job={job} />
//                       </div>
//                     ));
//                   })()}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
  
//         <Footer />
//       </div>
//     </>
//   ) : (
//     <Loading />
//   );
  
// };

// export default ApplyJobs;


import React, { useState, useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Loading from '../components/Loading';
import { assets } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '@clerk/clerk-react';

const JobInfoPill = ({ icon, text }) => (
  <span className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white/80 px-4 py-2.5 rounded-xl shadow-sm border border-slate-200/60 backdrop-blur-sm hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-300 group">
    <img src={icon} className="h-4 w-4 opacity-80 group-hover:scale-110 transition-transform" alt="icon" />
    {text}
  </span>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 3.482L6.143 9.03a.75.75 0 10-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.5-4.5z"
      clipRule="evenodd"
    />
  </svg>
);

const ApplyJobs = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getToken } = useAuth();
  const [JobsData, setJobsData] = useState(null);
  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false);
  const { jobs, backendUrl, userData, userApplication, fetchUserAppliedJobs } = useContext(AppContext);

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + `/api/jobs/${id}`);
      if (data.success) setJobsData(data.job);
      else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const applyHandler = async () => {
    try {
      if (!userData) return toast.error('Login to apply for jobs');
      if (!userData.resume) {
        navigate('/applications');
        return toast.error('Upload your resume');
      }
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + '/api/user/applyJob',
        { jobId: JobsData._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        toast.success(data.message);
        fetchUserAppliedJobs();
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const checkJobsApplied = async () => {
    if (!JobsData || !userApplication) return;
    const hasApplied = userApplication.some((item) => item.jobId._id === JobsData._id);
    setIsAlreadyApplied(hasApplied);
  };

  useEffect(() => {
    fetchJobs();
  }, [id]);

  useEffect(() => {
    if (userApplication.length > 0 && JobsData) checkJobsApplied();
  }, [JobsData, userApplication, id]);

  const ApplyButton = ({ isMobile = false }) => {
    const baseClasses =
      'font-semibold rounded-xl text-sm sm:text-base px-8 py-3.5 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105';
    const mobileClasses = isMobile ? 'w-full' : '';

    if (isAlreadyApplied) {
      return (
        <button
          disabled
          className={`${baseClasses} ${mobileClasses} bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed flex items-center justify-center gap-2 backdrop-blur-sm`}
        >
          <div className="bg-emerald-100 p-1 rounded-lg">
            <CheckIcon />
          </div>
          Application Submitted
        </button>
      );
    }

    return (
      <button
        onClick={applyHandler}
        className={`${baseClasses} ${mobileClasses} text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:ring-blue-500 focus:ring-opacity-50 shadow-blue-500/25`}
      >
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Apply Now
        </span>
      </button>
    );
  };

  return JobsData ? (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 text-slate-900">
      <NavBar />

      <main className="flex-grow">
        <div className="py-8 container px-4 2xl:px-20 mx-auto">
          {/* Job Header */}
          <div className="bg-white/80 rounded-3xl shadow-2xl w-full p-8 sm:p-10 lg:p-12 mb-8 border border-white/60 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    className="relative h-28 w-28 object-contain bg-white rounded-2xl p-3 border border-slate-200/70 backdrop-blur-sm shadow-lg"
                    src={JobsData.companyId.image}
                    alt="company-logo"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {JobsData.jobTitle}
                  </h1>
                  <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                    <JobInfoPill icon={assets.suitcase_icon} text={JobsData.companyId.name} />
                    <JobInfoPill icon={assets.location_icon} text={JobsData.location} />
                    <JobInfoPill icon={assets.person_icon} text={JobsData.level} />
                    <JobInfoPill icon={assets.money_icon} text={`CTC: ${kconvert.convertTo(JobsData.salary)}`} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-4 flex-shrink-0">
                <div className="max-md:hidden">
                  <ApplyButton />
                </div>
                <p className="text-slate-500 text-sm font-medium bg-white/50 px-3 py-1.5 rounded-lg border border-slate-200/50">
                  📅 Posted {moment(JobsData.date).fromNow()}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto">
            {/* Left: Description */}
            <div className="bg-white/90 rounded-2xl border border-gray-200/60 shadow-xl p-8 sm:p-10 w-full lg:w-2/3 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
              {/* Section Header */}
              <div className="flex items-center justify-between border-b border-gray-200/60 pb-6 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Job Description
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">Detailed role information and requirements</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg font-medium">
                  Updated {moment(JobsData.date).format("MMM D, YYYY")}
                </span>
              </div>

              {/* Overview Section */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 text-xl mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Overview
                </h3>
                <p className="text-gray-700 leading-relaxed text-[15px] bg-blue-50/30 p-4 rounded-xl border border-blue-100">
                  {JobsData.overview ||
                    "This role is responsible for overseeing daily operations, ensuring performance targets are met, and delivering an exceptional customer experience aligned with company standards."}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 text-xl mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Key Responsibilities
                </h3>
                <div
                  className="text-gray-700 leading-relaxed text-[15px] space-y-3 bg-indigo-50/20 p-4 rounded-xl border border-indigo-100"
                  dangerouslySetInnerHTML={{ __html: JobsData.description }}
                ></div>
              </div>

              {/* Skills / Requirements */}
              {JobsData.skills && JobsData.skills.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-800 text-xl mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Requirements & Skills
                  </h3>
                  <div className="bg-green-50/20 p-4 rounded-xl border border-green-100">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {JobsData.skills.map((skill, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-700 text-[15px]">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Apply Button for Mobile */}
              <div className="mt-10 md:hidden">
                <ApplyButton isMobile={true} />
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="bg-white/80 rounded-2xl shadow-xl p-6 sm:p-8 w-full lg:w-1/3 lg:sticky top-24 self-start border border-white/60 backdrop-blur-md transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/60">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-slate-900">
                  More from {JobsData.companyId.name}
                </h2>
              </div>
              
              {(() => {
                let filteredJobs = jobs.filter(
                  (job) => job._id !== JobsData._id && job.companyId._id === JobsData.companyId._id
                );

                const appliedJobs = new Set(userApplication.map((app) => app.jobId && app.jobId._id));
                filteredJobs = filteredJobs.filter((job) => !appliedJobs.has(job._id));

                if (filteredJobs.length === 0)
                  return (
                    <div className="text-center py-8">
                      <div className="text-slate-400 text-4xl mb-3">💼</div>
                      <p className="text-slate-500 font-medium">No other jobs available</p>
                    </div>
                  );

                return (
                  <div className="flex flex-col gap-4">
                    {filteredJobs.slice(0, 4).map((job) => (
                      <div key={job._id} className="transform hover:scale-[1.02] transition-transform duration-300">
                        <JobCard job={job} />
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  ) : (
    <Loading />
  );
};

export default ApplyJobs;