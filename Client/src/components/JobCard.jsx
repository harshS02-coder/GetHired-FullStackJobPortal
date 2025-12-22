import React from 'react';
import { assets } from '../assets/assets';
import {useNavigate} from 'react-router-dom'

const JobCard = ({ job }) => {

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 px-4 py-3 mr-2" id="Job-card">
      <img className="h-8 w-8 mt-2 mb-3" src={job.companyId.image} alt="Company Logo" />

      <h4 className="text-base font-semibold text-gray-800 mb-3">{job.jobTitle}</h4>

      <div className="flex gap-2 mb-3">
        <span className="text-xs text-gray-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
          {job.location}
        </span>
        <span className="text-xs text-gray-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
          {job.level}
        </span>
      </div>

      <p
        className="text-sm text-gray-500 mb-3"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + '...' }}
      ></p>

      <div className="flex gap-2 mb-2 ">
        <button onClick = {()=> {navigate(`/applyjob/${job._id}`); scroll(0,0)}} className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition">Apply Now</button>
        <button onClick = {()=> {navigate(`/applyjob/${job._id}`); scroll(0,0)}}
        className="border border-gray-400 text-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-100 transition">About</button>
      </div>
    </div>
  );
};

export default JobCard;
