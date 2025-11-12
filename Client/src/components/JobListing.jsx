// import React, { useContext, useState, useEffect } from 'react'
// import { AppContext } from '../context/AppContext';
// import { assets } from '../assets/assets';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { JobCategories, JobLocations} from '../assets/assets';
// import JobCard from './JobCard'



// const JobListing = () =>{

//   const {isSearched, searchFilter, setSearchFilter, jobs} = useContext(AppContext)

//   const [showFilter, setShowFilter] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState([]);
//   const [FilteredJobs, setFilteredJobs] = useState(jobs)

//   const handleCategoryChange = (category) => {
//       setSelectedCategories(
//           prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
//       )
//   }

//   const handleLocationChange = (location) => {
//     setSelectedLocation(
//         prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
//     )
// }

// useEffect(() => {
//     const matchesCategory = job =>
//       selectedCategories.length === 0 || selectedCategories.includes(job?.category);
  
//     const matchesLocation = job =>
//       selectedLocation.length === 0 || selectedLocation.includes(job?.location);
  
//       const matchesTitle = job =>
//       !searchFilter?.title || job?.jobTitle?.toLowerCase().includes(searchFilter.title.toLowerCase());    
  
//     const matchesSearchLocation = job =>
//       !searchFilter?.location || job?.location?.toLowerCase().includes(searchFilter.location.toLowerCase());
  
//     const newFilteredJobs = jobs
//       ?.slice()
//       .reverse()
//       .filter(job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)) || [];
  
//     setFilteredJobs(newFilteredJobs);
//     setCurrentPage(1);
//   }, [jobs, selectedCategories, selectedLocation, searchFilter]);
  

//   return (
//     <div className = "container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 mt-4 bg-blue-100 ">
//       {/*left-side search filters */}
//       <div className="w-full lg:w-1/4 bg-blue-100 px-4">
//           {
//               isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
//                   <>
//                   <h3 className="font-medium text-lg mb-4">Your Search</h3>
//                   <div className = "mb-4 text-grey-600">
//                       {searchFilter.title && (
//                           <span className="inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-2 py-1.5 rounded hover:bg-gray-300">
//                             {searchFilter.title} 
//                             <img onClick = {e => setSearchFilter(prev => ({...prev, title:""}))} className = "cursor-pointer"src = {assets.cross_icon} alt = ""/> 
//                           </span>
//                       )}
//                       {searchFilter.location && (
//                           <span className="ml-2 inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-2 py-1.5 rounded hover:bg-gray-300">
//                             {searchFilter.location}
//                             <img onClick = {e => setSearchFilter(prev => ({...prev, location:""}))} className = "cursor-pointer"src = {assets.cross_icon} alt = ""/>  
//                           </span>
//                       )}
//                   </div>
//                   </>
//               )
//           }
//           <button onClick={e=> setShowFilter(prev => !prev)} className = "px-6 py-1.5 rounded border border-black-400 lg:hidden">
//               {showFilter ? "Close" : "Filters"}
//           </button>
//           {/* category filter */}
//           <div className = {showFilter ? "" : "max-lg:hidden"}>
//               <h4 className = "font-medium text-lg mb-2">Search by Categories</h4>
//               <ul className="space y-4">
//                   {
//                       JobCategories.map((category, index)=>(
//                           <li className ="flex gap-3 item-center" key ={index}>
//                             <input type ="checkbox" 
//                             onChange={() => handleCategoryChange(category)}
//                             checked ={selectedCategories.includes(category)} />
//                             {category}
//                           </li>
//                       ))
//                   }
//               </ul>
//               <div className ={showFilter ? "" : "max-lg:hidden"}>
//               <h4 className = "mt-4 font-medium text-lg mb-2">Search by Location</h4>
//               <ul>
//                   {
//                       JobLocations.map((location, index)=>(
//                           <li className ="flex gap-3 item-center" key ={index}>
//                             <input type ="checkbox" onChange={() => handleLocationChange(location)}
//                             checked ={selectedLocation.includes(location)}/>
//                             {location}
//                           </li>
//                       ))
//                   }
//               </ul>
//               </div>
//           </div>
//       </div>
//       {/* job listing */}
//       <section className="w-full lg:w-3/4 text-grey-800 max-lg:px-4">
//           <h3 className="font-medium text-lg mb-2" id='job-list'>Latest Jobs</h3>
//           <p className =" mb-8 ">Get your dream jobs from top companies in one place..</p>
//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//                   {FilteredJobs.slice((currentPage-1)*6, currentPage*6).map((job, index)=>(
//                       <JobCard key ={index} job = {job}/>
//                   ))}
//           </div>

//           {FilteredJobs.length>0 && (
//               <div className = "flex items-center justify-center space-x-2 mt-10">
//                   <a href="#job-list">
//                     <img onClick={()=> setCurrentPage(Math.max(currentPage-1,1))} src={assets.left_arrow_icon} />
//                   </a>
//                   {Array.from({length:Math.ceil(FilteredJobs.length/6)}).map((_, index)=>(
//                       <a key = {index}  href = "#job-list">
//                         <button onClick= {()=>setCurrentPage(index+1)}className = {`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index+1 ? 'bg-blue-300 text-blue-500' : 'text-gray-500'}`}>{index+1}</button>
//                       </a>
//                   ))} 
//                   <a href="#job-list">
//                     <img onClick={()=> setCurrentPage(Math.min(currentPage+1, Math.ceil(FilteredJobs.length/6)))} src={assets.right_arrow_icon} />
//                   </a>
//               </div>
//           )}
//       </section>
//     </div>
//   )
// }

// export default JobListing


import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import { JobCategories, JobLocations } from '../assets/assets';
import JobCard from './JobCard'

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext)
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
      selectedCategories.length === 0 || selectedCategories.includes(job?.category);

    const matchesLocation = job =>
      selectedLocation.length === 0 || selectedLocation.includes(job?.location);

    const matchesTitle = job =>
      !searchFilter?.title || job?.jobTitle?.toLowerCase().includes(searchFilter.title.toLowerCase());

    const matchesSearchLocation = job =>
      !searchFilter?.location || job?.location?.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      ?.slice()
      .reverse()
      .filter(job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)) || [];

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocation, searchFilter]);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-12 mt-4">
      {/* Left-side search filters */}
      <div className="w-full lg:w-1/4 px-4">
        {/* Search Results Header */}
        {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 p-6 mb-6">
            <h3 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Your Search Results
            </h3>
            <div className="flex flex-wrap gap-2">
              {searchFilter.title && (
                <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-xl border border-blue-200/60 hover:bg-blue-200/80 transition-all duration-200 group">
                  {searchFilter.title}
                  <img
                    onClick={e => setSearchFilter(prev => ({ ...prev, title: "" }))}
                    className="cursor-pointer w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
                    src={assets.cross_icon}
                    alt="Remove filter"
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-2 rounded-xl border border-indigo-200/60 hover:bg-indigo-200/80 transition-all duration-200 group">
                  {searchFilter.location}
                  <img
                    onClick={e => setSearchFilter(prev => ({ ...prev, location: "" }))}
                    className="cursor-pointer w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
                    src={assets.cross_icon}
                    alt="Remove filter"
                  />
                </span>
              )}
            </div>
          </div>
        )}

        {/* Mobile Filter Toggle */}
        <button
          onClick={e => setShowFilter(prev => !prev)}
          className="w-full lg:hidden px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
          </svg>
          {showFilter ? "Close Filters" : "Show Filters"}
        </button>

        {/* Filters Panel */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 p-6 lg:p-8 transition-all duration-300 ${showFilter ? "" : "max-lg:hidden"}`}>
          {/* Category Filter */}
          <div className="mb-8">
            <h4 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Search by Categories
            </h4>
            <ul className="space-y-3">
              {JobCategories.map((category, index) => (
                <li className="flex items-center gap-3 group cursor-pointer" key={index}>
                  <input
                    type="checkbox"
                    onChange={() => handleCategoryChange(category)}
                    checked={selectedCategories.includes(category)}
                    className="w-4 h-4 text-blue-600 bg-white border-2 border-slate-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer transition-all duration-200"
                  />
                  <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Filter */}
          <div>
            <h4 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              Search by Location
            </h4>
            <ul className="space-y-3">
              {JobLocations.map((location, index) => (
                <li className="flex items-center gap-3 group cursor-pointer" key={index}>
                  <input
                    type="checkbox"
                    onChange={() => handleLocationChange(location)}
                    checked={selectedLocation.includes(location)}
                    className="w-4 h-4 text-indigo-600 bg-white border-2 border-slate-300 rounded focus:ring-indigo-500 focus:ring-2 cursor-pointer transition-all duration-200"
                  />
                  <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                    {location}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Job Listing Section */}
      <section className="w-full lg:w-3/4 text-slate-800 max-lg:px-4">
        {/* Section Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 p-6 lg:p-8 mb-8">
          <h3 className="font-bold text-2xl text-slate-900 mb-2" id='job-list'>
            Latest Job Opportunities
          </h3>
          <p className="text-slate-600 text-lg mb-2">
            Get your dream jobs from top companies in one place.
          </p>
          <p className="text-slate-500 text-sm">
            Showing {FilteredJobs.length} {FilteredJobs.length === 1 ? 'job' : 'jobs'}
          </p>
        </div>

        {/* Jobs Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12'>
          {FilteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
            <div key={index} className="transform hover:scale-[1.02] transition-transform duration-300">
              <JobCard job={job} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {FilteredJobs.length > 0 && (
          <div className="flex items-center justify-center space-x-3 mt-12">
            <a href="#job-list">
              <button
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:scale-105 transition-all duration-300 group"
              >
                <img
                  src={assets.left_arrow_icon}
                  className={`w-5 h-5 ${currentPage !== 1 ? 'group-hover:scale-110 transition-transform' : ''}`}
                  alt="Previous page"
                />
              </button>
            </a>

            {Array.from({ length: Math.ceil(FilteredJobs.length / 6) }).map((_, index) => (
              <a key={index} href="#job-list">
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-12 h-12 flex items-center justify-center border rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    currentPage === index + 1
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg border-transparent'
                      : 'bg-white/80 text-slate-700 border-slate-200 shadow-md hover:bg-white'
                  }`}
                >
                  {index + 1}
                </button>
              </a>
            ))}

            <a href="#job-list">
              <button
                onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(FilteredJobs.length / 6)))}
                disabled={currentPage === Math.ceil(FilteredJobs.length / 6)}
                className="w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:scale-105 transition-all duration-300 group"
              >
                <img
                  src={assets.right_arrow_icon}
                  className={`w-5 h-5 ${currentPage !== Math.ceil(FilteredJobs.length / 6) ? 'group-hover:scale-110 transition-transform' : ''}`}
                  alt="Next page"
                />
              </button>
            </a>
          </div>
        )}

        {/* No Results State */}
        {FilteredJobs.length === 0 && (
          <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No jobs found</h3>
            <p className="text-slate-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default JobListing