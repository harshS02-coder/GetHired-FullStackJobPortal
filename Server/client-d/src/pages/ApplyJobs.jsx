import React, { useState, useContext, useEffect } from 'react'
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Loading from '../components/Loading';
import { assets } from '../assets/assets';
import kconvert from 'k-convert'
import moment from 'moment'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'

const ApplyJobs = () => {
  const { id } = useParams();
  const [JobsData, setJobsData] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJobs = async () => {
    const data = jobs.filter(job => job._id === id);
    if (data.length !== 0) {
      setJobsData(data[0]);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobs();
    }
  }, [id, jobs]);

  return JobsData ? (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-grow">
          <div className="py-10 container px-4 2xl:px-20 mx-auto">
            <div className='bg-white text-black rounded-lg w-full'>
              {/* Top Hero Section */}
              <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl mt-2 h-[300px]'>
                <div className='flex flex-col md:flex-row'>
                  <img
                    className='h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 md:mr-4 border'
                    src={JobsData.companyId.image}
                    alt="company-logo"
                  />
                  <div className='md:text-left text-neutral-700'>
                    <h1 className='font-medium text-2xl sm:text-4xl'>{JobsData.title}</h1>
                    <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 mt-3 items-center text-gray-600 md:justify-start'>
                      <span className='flex items-center gap-1'>
                        <img src={assets.suitcase_icon} />
                        {JobsData.companyId.name}
                      </span>
                      <span className='flex items-center gap-1'>
                        <img src={assets.location_icon} />
                        {JobsData.location}
                      </span>
                      <span className='flex items-center gap-1'>
                        <img src={assets.person_icon} />
                        {JobsData.level}
                      </span>
                      <span className='flex items-center gap-1'>
                        <img src={assets.money_icon} />
                        CTC: {kconvert.convertTo(JobsData.salary)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col text-end text-sm max-md:mx-auto max-md:text-center'>
                  <button type="button" className="btn btn-primary p-2.5 px-10">Apply Now</button>
                  <p className='mt-2 text-gray-600'>Posted {moment(JobsData.date).fromNow()}</p>
                </div>
              </div>

              {/* Job Description + More Jobs Side by Side */}
              <div className="flex flex-col lg:flex-row gap-6 w-[90%] mx-auto z-10 mt-[-100px]">
                {/* Job Description */}
                <div className="bg-gray-300 rounded-lg shadow-lg p-6 w-full lg:w-2/3">
                  <h2 className='font-bold text-2xl mb-4'>Job Description</h2>
                  <div className='rich-text' dangerouslySetInnerHTML={{ __html: JobsData.description }}></div>
                  <button type="button" className="btn btn-primary p-2.5 px-10 mt-3">Apply Now</button>
                </div>

                {/* More Jobs */}
                <div className="bg-gray-100 rounded-lg shadow-md p-4 w-full lg:w-1/3">
                  <h2 className="text-xl font-semibold mb-4">More Jobs from {JobsData.companyId.name}</h2>
                  {jobs
                    .filter(job => job._id !== JobsData._id && job.companyId._id === JobsData.companyId._id)
                    .slice(0, 4)
                    .map((job, index) => (
                      <div key={index} className="mb-4">
                        <JobCard job={job} />
                      </div>
                    ))}
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
