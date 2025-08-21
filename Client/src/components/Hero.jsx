import React, { useContext,useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../assets/assets'; 
import {AppContext} from '../context/AppContext'

const Hero = () => {

    const {setSearchFilter, setIsSearched} = useContext(AppContext)

    const titleRef = useRef(null);
    const locationRef = useRef(null);

    const onSearch = ()=>{
        setSearchFilter({
            title : titleRef.current.value,
            location : locationRef.current.value
        });
        setIsSearched(true)
    }
  return (
    <div>
       <section className="py-5 bg-gradient-to-r from-[#000000] to-[#17021A]">
      <div
        className="container text-center d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: '50vh' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-100 whitespace-nowrap overflow-hidden border-r-2 border-[#091235] w-fit animate-typing animation-blink">
        GetHired – Land Your Dream Job
        </h1>


        <p className="lead mt-3 mb-0 fw-bold" style={{ color: 'white' }}>
          Explore 1000+ job opportunities and apply with one click. Your future starts here.
        </p>

        <div className="input-group mt-4 rounded" style={{ maxWidth: '700px', width: '100%' }}>
        {/* Job search input with icon */}
        <span className="input-group-text">
            <img
            src={assets.search_icon}
            alt="Search"
            style={{ width: '20px', height: '20px' }}
            />
        </span>
        <input
            type="text"
            className="form-control border"
            placeholder="Search for jobs"
            aria-label="Job Search"
            ref = {titleRef}
        />

        {/* Location input with icon */}
        <span className="input-group-text">
            <img
            src={assets.location_icon}
            alt="Location"
            style={{ width: '20px', height: '20px' }}
            />
        </span>
        <input
            type="text"
            className="form-control border"
            placeholder="Location"
            aria-label="Location"
            ref = {locationRef}
        />
        <button onClick = {onSearch} 
            style={{ borderRadius: '50px', marginLeft: '1rem' }}
            type="button"
            className="btn btn-primary"
        >Search</button>
        </div>
      </div>
    </section>
        <div className = 'border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
            <div className ='flex justify-center gap-10 lg:gap-16 flex-wrap'>
            <p className= 'font-medium'>Trusted By</p>
            <img className = "h-6" src={assets.microsoft_logo} alt=""/>  
            <img className = "h-6" src={assets.walmart_logo} alt=""/>  
            <img className = "h-6" src={assets.accenture_logo} alt=""/>  
            <img className = "h-6" src={assets.samsung_logo} alt=""/>  
            <img className = "h-6" src={assets.amazon_logo} alt=""/>  
            <img className = "h-6" src={assets.adobe_logo} alt=""/>  
            </div>
        </div>
    </div>
    
  );
};

export default Hero;
