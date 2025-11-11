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
  <span className="flex items-center gap-1.5 text-sm text-slate-700 bg-slate-100/70 px-3 py-1.5 rounded-full shadow-sm border border-slate-200/60 backdrop-blur-sm hover:bg-blue-50/80 transition">
    <img src={icon} className="h-4 w-4 opacity-70" alt="icon" />
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
      'font-semibold rounded-lg text-sm sm:text-base px-8 py-3 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md';
    const mobileClasses = isMobile ? 'w-full' : '';

    if (isAlreadyApplied) {
      return (
        <button
          disabled
          className={`${baseClasses} ${mobileClasses} bg-slate-100 text-slate-500 border border-slate-200 cursor-not-allowed flex items-center justify-center gap-2`}
        >
          <CheckIcon />
          Already applied
        </button>
      );
    }

    return (
      <button
        onClick={applyHandler}
        className={`${baseClasses} ${mobileClasses} text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:ring-blue-400`}
      >
        Apply now
      </button>
    );
  };

  return JobsData ? (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900">
      <NavBar />

      <main className="flex-grow">
        <div className="py-12 container px-4 2xl:px-20 mx-auto">
          {/* Job Header */}
          <div className="bg-slate-100/70 rounded-2xl shadow-xl w-full p-6 sm:p-8 lg:p-10 mb-8 border border-white/40 backdrop-blur-lg transition hover:shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <img
                  className="h-24 w-24 object-contain bg-slate-200/60 rounded-xl p-2 border border-slate-300/70 backdrop-blur-sm shadow-sm"
                  src={JobsData.companyId.image}
                  alt="company-logo"
                />
                <div>
                  <h1 className="font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900">
                    {JobsData.jobTitle}
                  </h1>
                  <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                    <JobInfoPill icon={assets.suitcase_icon} text={JobsData.companyId.name} />
                    <JobInfoPill icon={assets.location_icon} text={JobsData.location} />
                    <JobInfoPill icon={assets.person_icon} text={JobsData.level} />
                    <JobInfoPill icon={assets.money_icon} text={`CTC: ${kconvert.convertTo(JobsData.salary)}`} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-2 flex-shrink-0">
                <div className="max-md:hidden">
                  <ApplyButton />
                </div>
                <p className="mt-1 text-slate-500 text-sm">
                  Posted {moment(JobsData.date).fromNow()}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto">
            {/* Left: Description */}
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 sm:p-10 w-full lg:w-2/3">
              {/* Section Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Job Description
                </h2>
                <span className="text-sm text-gray-500">
                  Updated {moment(JobsData.date).format("MMM D, YYYY")}
                </span>
              </div>

              {/* Overview Section */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-800 text-lg mb-2">Overview</h3>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {JobsData.overview ||
                    "This role is responsible for overseeing daily operations, ensuring performance targets are met, and delivering an exceptional customer experience aligned with company standards."}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-800 text-lg mb-2">
                  Key Responsibilities
                </h3>
                <div
                  className="text-gray-700 leading-relaxed text-[15px] space-y-2"
                  dangerouslySetInnerHTML={{ __html: JobsData.description }}
                ></div>
              </div>

              {/* Skills / Requirements */}
              {JobsData.skills && JobsData.skills.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 text-lg mb-2">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-700 text-[15px] space-y-1">
                    {JobsData.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Apply Button for Mobile */}
              <div className="mt-8 md:hidden">
                <ApplyButton isMobile={true} />
              </div>
            </div>


            {/* Right: Sidebar */}
            <div className="bg-slate-100/70 rounded-2xl shadow-xl p-6 sm:p-8 w-full lg:w-1/3 lg:sticky top-24 self-start border border-white/40 backdrop-blur-md transition hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-slate-900 mb-6 pb-4 border-b border-slate-200">
                More Jobs from {JobsData.companyId.name}
              </h2>
              {(() => {
                let filteredJobs = jobs.filter(
                  (job) => job._id !== JobsData._id && job.companyId._id === JobsData.companyId._id
                );

                const appliedJobs = new Set(userApplication.map((app) => app.jobId && app.jobId._id));
                filteredJobs = filteredJobs.filter((job) => !appliedJobs.has(job._id));

                if (filteredJobs.length === 0)
                  return <p className="text-slate-500 italic text-center py-4">No other jobs available.</p>;

                return (
                  <div className="flex flex-col gap-4">
                    {filteredJobs.slice(0, 4).map((job) => (
                      <div key={job._id}>
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
