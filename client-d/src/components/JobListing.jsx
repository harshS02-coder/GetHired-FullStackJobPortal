import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JobCategories, JobLocations} from '../assets/assets';
import JobCard from './JobCard'



const JobListing = () =>{

  const {isSearched, searchFilter, setSearchFilter, jobs} = useContext(AppContext)

  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [FilteredJobs, setFilteredJobs] = useState(jobs)

  const handleCategoryChange = (category) => {
      setSelectedCategories(
          prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
      )
  }

  const handleLocationChange = (location) => {
    setSelectedLocation(
        prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
    )
}

useEffect(() => {
    const matchesCategory = job =>
      selectedCategories.length === 0 || selectedCategories.includes(job.category);
  
    const matchesLocation = job =>
      selectedLocation.length === 0 || selectedLocation.includes(job.location);
  
    const matchesTitle = job =>
      !searchFilter.title || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
  
    const matchesSearchLocation = job =>
      !searchFilter.location || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());
  
    const newFilteredJobs = jobs.slice().reverse().filter(
      job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
    );
  
    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocation, searchFilter]);
  


  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 mt-4 bg-gradient-to-br from-blue-50 to-white">
      {/* side-bar search filters */}
      <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-sm p-6">
          {
              isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                  <>
                  <h3 className="font-semibold text-gray-800 text-lg mb-4">Your Search</h3>
                  <div className="mb-4 flex flex-wrap gap-2">
                      {searchFilter.title && (
                          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-200">
                            {searchFilter.title} 
                            <img onClick={e => setSearchFilter(prev => ({...prev, title:""}))} className="cursor-pointer w-4 h-4 hover:opacity-75" src={assets.cross_icon} alt="Remove"/> 
                          </span>
                      )}
                      {searchFilter.location && (
                          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-200">
                            {searchFilter.location}
                            <img onClick={e => setSearchFilter(prev => ({...prev, location:""}))} className="cursor-pointer w-4 h-4 hover:opacity-75" src={assets.cross_icon} alt="Remove"/>  
                          </span>
                      )}
                  </div>
                  </>
              )
          }
          <button 
            onClick={e => setShowFilter(prev => !prev)} 
            className="w-full px-6 py-2.5 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 lg:hidden flex items-center justify-center gap-2 text-gray-600"
          >
              {showFilter ? "Hide Filters" : "Show Filters"}
          </button>
          
          {/* category filter */}
          <div className={`mt-6 ${showFilter ? "" : "max-lg:hidden"}`}>
              <h4 className="font-semibold text-gray-800 text-lg mb-4">Search by Categories</h4>
              <ul className="space-y-3">
                  {
                      JobCategories.map((category, index)=>(
                          <li className="flex items-center gap-3 text-gray-600 hover:text-gray-900" key={index}>
                            <input 
                              type="checkbox" 
                              className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                              onChange={() => handleCategoryChange(category)}
                              checked={selectedCategories.includes(category)}
                            />
                            {category}
                          </li>
                      ))
                  }
              </ul>
              <div className={`mt-8 ${showFilter ? "" : "max-lg:hidden"}`}>
                <h4 className="font-semibold text-gray-800 text-lg mb-4">Search by Location</h4>
                <ul className="space-y-3">
                    {
                        JobLocations.map((location, index)=>(
                            <li className="flex items-center gap-3 text-gray-600 hover:text-gray-900" key={index}>
                              <input 
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                onChange={() => handleLocationChange(location)}
                                checked={selectedLocation.includes(location)}
                              />
                              {location}
                            </li>
                        ))
                    }
                </ul>
              </div>
          </div>
      </div>

      {/* job listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4 lg:pl-8">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="font-semibold text-2xl text-gray-800 mb-2" id='job-list'>Latest Jobs</h3>
            <p className="text-gray-600 mb-0">Get your dream jobs from top companies in one place</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {FilteredJobs.slice((currentPage-1)*6, currentPage*6).map((job, index)=>(
                  <JobCard key={index} job={job}/>
              ))}
          </div>

          {/* pagination */}
          {FilteredJobs.length>0 && (
              <div className="flex items-center justify-center space-x-3 mt-10">
                  <a href="#job-list" className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <img 
                      onClick={() => setCurrentPage(Math.max(currentPage-1,1))} 
                      src={assets.left_arrow_icon}
                      className="w-5 h-5"
                      alt="Previous"
                    />
                  </a>
                  {Array.from({length:Math.ceil(FilteredJobs.length/6)}).map((_, index)=>(
                      <a key={index} href="#job-list">
                        <button 
                          onClick={() => setCurrentPage(index+1)}
                          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200
                            ${currentPage === index+1 
                              ? 'bg-blue-600 text-white font-medium shadow-sm' 
                              : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                          {index+1}
                        </button>
                      </a>
                  ))} 
                  <a href="#job-list" className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <img 
                      onClick={() => setCurrentPage(Math.min(currentPage+1, Math.ceil(FilteredJobs.length/6)))} 
                      src={assets.right_arrow_icon}
                      className="w-5 h-5"
                      alt="Next"
                    />
                  </a>
              </div>
          )}
      </section>
    </div>
  )
}

export default JobListing