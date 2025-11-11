import React, { useState, useContext, useEffect } from 'react'
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Loading from '../components/Loading';
import { assets, jobsData } from '../assets/assets';
import kconvert from 'k-convert'
import moment from 'moment'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useAuth } from '@clerk/clerk-react'

const ApplyJobs = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { getToken } = useAuth()
  const [JobsData, setJobsData] = useState(null);
  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false)
  const { jobs, backendUrl, userData, userApplication, fetchUserAppliedJobs } = useContext(AppContext);

  const fetchJobs = async () => {

    try {
      const { data } = await axios.get(backendUrl + `/api/jobs/${id}`)
      if (data.success) {
        setJobsData(data.job)
        console.log(data.job)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  //apply job handler

  const applyHandler = async () => {

    try {
      if (!userData) {
        return toast.error('Login to apply for jobs')
      }

      if (!userData.resume) {
        navigate('/applications')
        return toast.error('Upload your resume')
      }

      const token = await getToken();

      const { data } = await axios.post(backendUrl + '/api/user/applyJob',
        { jobId: JobsData._id }, { headers: { Authorization: `Bearer ${token}` } })

      if (data.success) {
        toast.success(data.message);
        fetchUserAppliedJobs()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  //checking jobs already applied or not
  const checkJobsApplied = async () => {

    const hasApplied = userApplication.some(item => item.jobId._id === JobsData._id)
    setIsAlreadyApplied(hasApplied);

  }


  useEffect(() => {
    fetchJobs();
  }, [id]);

  useEffect(() => {
    if (userApplication.length > 0 && JobsData) {
      checkJobsApplied()
    }
  }, [JobsData, userApplication, id])

  return JobsData ? (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
  
        <main className="flex-grow">
          <div className="py-10 container px-4 2xl:px-20 mx-auto">
            <div className="bg-white text-black rounded-lg w-full">
              {/* Top Section */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-10 mb-6 bg-sky-50 border border-sky-400 rounded-xl mt-2">
               
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <img
                    className="h-20 w-20 object-contain bg-white rounded-lg p-2 border"
                    src={JobsData.companyId.image}
                    alt="company-logo"
                  />
  
                  <div className="text-center md:text-left text-neutral-700">
                    <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl">
                      {JobsData.jobTitle}
                    </h1>
  
                    <div className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start text-gray-600">
                      <span className="flex items-center gap-1">
                        <img src={assets.suitcase_icon} className="h-4 w-4" />
                        {JobsData.companyId.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <img src={assets.location_icon} className="h-4 w-4" />
                        {JobsData.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <img src={assets.person_icon} className="h-4 w-4" />
                        {JobsData.level}
                      </span>
                      <span className="flex items-center gap-1">
                        <img src={assets.money_icon} className="h-4 w-4" />
                        CTC: {kconvert.convertTo(JobsData.salary)}
                      </span>
                    </div>
                  </div>
                </div>
  
                <div className="flex flex-col items-center md:items-end text-sm">
                  <button
                    onClick={applyHandler}
                    type="button"
                    className="btn btn-primary px-6 py-2 text-sm sm:text-base"
                  >
                    {isAlreadyApplied ? "Already applied" : "Apply now"}
                  </button>
                  <p className="mt-2 text-gray-600">
                    Posted {moment(JobsData.date).fromNow()}
                  </p>
                </div>
              </div>
  
              {/* Job Description + side bar of more jobs*/}
              <div className="flex flex-col lg:flex-row gap-6 w-full mx-auto">
                <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-full lg:w-2/3">
                  <h2 className="font-bold text-2xl mb-4">Job Description</h2>
                  <div
                    className="rich-text prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: JobsData.description }}
                  ></div>
  
                  <div className="mt-6 flex justify-center md:hidden">
                    <button
                      onClick={applyHandler}
                      type="button"
                      className="btn btn-primary px-6 py-2"
                    >
                      {isAlreadyApplied ? "Already applied" : "Apply now"}
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg shadow-md p-4 w-full lg:w-1/3">
                  <h2 className="text-xl font-semibold mb-4">
                    More Jobs from {JobsData.companyId.name}
                  </h2>
  
                  {(() => {
                    let filteredJobs = jobs.filter(
                      (job) =>
                        job._id !== JobsData._id &&
                        job.companyId._id === JobsData.companyId._id
                    );
  
                    const appliedJobs = new Set(
                      userApplication.map((app) => app.jobId && app.jobId._id)
                    );
                    filteredJobs = filteredJobs.filter(
                      (job) => !appliedJobs.has(job._id)
                    );
  
                    if (filteredJobs.length === 0) {
                      return (
                        <p className="text-gray-500 italic">
                          No more jobs available from this company.
                        </p>
                      );
                    }
  
                    return filteredJobs.slice(0, 4).map((job, index) => (
                      <div key={index} className="mb-4">
                        <JobCard job={job} />
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </div>
        </main>
  
        <Footer />
      </div>
    </>
  ) : (
    <Loading />
  );
  
};

export default ApplyJobs;
