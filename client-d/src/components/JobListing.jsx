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
    <div className = "container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 mt-4 bg-blue-100 ">
      {/* side-bar search filters */}
      <div className="w-full lg:w-1/4 bg-blue-100 px-4">
          {
              isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                  <>
                  <h3 className="font-medium text-lg mb-4">Your Search</h3>
                  <div className = "mb-4 text-grey-600">
                      {searchFilter.title && (
                          <span className="inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-2 py-1.5 rounded hover:bg-gray-300">
                            {searchFilter.title} 
                            <img onClick = {e => setSearchFilter(prev => ({...prev, title:""}))} className = "cursor-pointer"src = {assets.cross_icon} alt = ""/> 
                          </span>
                      )}
                      {searchFilter.location && (
                          <span className="ml-2 inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-2 py-1.5 rounded hover:bg-gray-300">
                            {searchFilter.location}
                            <img onClick = {e => setSearchFilter(prev => ({...prev, location:""}))} className = "cursor-pointer"src = {assets.cross_icon} alt = ""/>  
                          </span>
                      )}
                  </div>
                  </>
              )
          }
          <button onClick={e=> setShowFilter(prev => !prev)} className = "px-6 py-1.5 rounded border border-black-400 lg:hidden">
              {showFilter ? "Close" : "Filters"}
          </button>
          {/* category filter */}
          <div className = {showFilter ? "" : "max-lg:hidden"}>
              <h4 className = "font-medium text-lg mb-2">Search by Categories</h4>
              <ul className="space y-4">
                  {
                      JobCategories.map((category, index)=>(
                          <li className ="flex gap-3 item-center" key ={index}>
                            <input type ="checkbox" 
                            onChange={() => handleCategoryChange(category)}
                            checked ={selectedCategories.includes(category)} />
                            {category}
                          </li>
                      ))
                  }
              </ul>
              <div className ={showFilter ? "" : "max-lg:hidden"}>
              <h4 className = "mt-4 font-medium text-lg mb-2">Search by Location</h4>
              <ul>
                  {
                      JobLocations.map((location, index)=>(
                          <li className ="flex gap-3 item-center" key ={index}>
                            <input type ="checkbox" onChange={() => handleLocationChange(location)}
                            checked ={selectedLocation.includes(location)}/>
                            {location}
                          </li>
                      ))
                  }
              </ul>
              </div>
          </div>
      </div>
      {/* job listing */}
      <section className="w-full lg:w-3/4 text-grey-800 max-lg:px-4">
          <h3 className="font-medium text-lg mb-2" id='job-list'>Latest Jobs</h3>
          <p className =" mb-8 ">Get your dream jobs from top companies in one place..</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {FilteredJobs.slice((currentPage-1)*6, currentPage*6).map((job, index)=>(
                      <JobCard key ={index} job = {job}/>
                  ))}
          </div>

          {/* pagination */}
          {FilteredJobs.length>0 && (
              <div className = "flex items-center justify-center space-x-2 mt-10">
                  <a href="#job-list">
                    <img onClick={()=> setCurrentPage(Math.max(currentPage-1,1))} src={assets.left_arrow_icon} />
                  </a>
                  {Array.from({length:Math.ceil(FilteredJobs.length/6)}).map((_, index)=>(
                      <a key = {index}  href = "#job-list">
                        <button onClick= {()=>setCurrentPage(index+1)}className = {`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index+1 ? 'bg-blue-300 text-blue-500' : 'text-gray-500'}`}>{index+1}</button>
                      </a>
                  ))} 
                  <a href="#job-list">
                    <img onClick={()=> setCurrentPage(Math.min(currentPage+1, Math.ceil(FilteredJobs.length/6)))} src={assets.right_arrow_icon} />
                  </a>
              </div>
          )}
      </section>
    </div>
  )
}

export default JobListing