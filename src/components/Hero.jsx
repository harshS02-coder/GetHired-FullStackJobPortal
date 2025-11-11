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
       <section className="py-8 bg-gradient-to-r from-[#000000] to-[#17021A] relative">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="container text-center d-flex flex-column justify-content-center align-items-center relative"
             style={{ minHeight: '50vh' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-100 whitespace-nowrap overflow-hidden border-r-2 border-[#091235] w-fit animate-typing animation-blink">
            GetHired – Land Your Dream Job
          </h1>

          <p className="lead mt-3 mb-0 fw-bold" style={{ color: 'white' }}>
            Explore 1000+ job opportunities and apply with one click. Your future starts here.
          </p>

          {/* Statistics Section */}
          <div className="mt-6 flex justify-center gap-8 sm:gap-12 text-white/90">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">10,000+</div>
              <div className="text-xs sm:text-sm opacity-75">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">500+</div>
              <div className="text-xs sm:text-sm opacity-75">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">1M+</div>
              <div className="text-xs sm:text-sm opacity-75">Job Seekers</div>
            </div>
          </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6 px-4 sm:px-0" style={{ maxWidth: '650px', width: '100%' }}>
          {/* Job search input with icon */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={assets.search_icon}
                alt="Search"
                className="w-4 h-4 text-gray-400"
              />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-2.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Job title or keyword"
              aria-label="Job Search"
              ref={titleRef}
            />
          </div>

          {/* Location input with icon */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={assets.location_icon}
                alt="Location"
                className="w-4 h-4 text-gray-400"
              />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-2.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="City or location"
              aria-label="Location"
              ref={locationRef}
            />
          </div>

          {/* Search Button */}
          <button
            onClick={onSearch}
            type="button"
            className="py-2.5 px-6 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </section>
        <div className='max-w-5xl mx-auto border border-gray-200 bg-white/80 backdrop-blur-sm shadow-md mt-6 py-4 px-6 rounded-xl'>
            <div className='flex justify-center items-center gap-6 lg:gap-12 flex-wrap'>
              <p className='font-medium text-gray-600 text-sm'>Trusted By</p>
              {[
                { src: assets.microsoft_logo, alt: "Microsoft" },
                { src: assets.walmart_logo, alt: "Walmart" },
                { src: assets.accenture_logo, alt: "Accenture" },
                { src: assets.samsung_logo, alt: "Samsung" },
                { src: assets.amazon_logo, alt: "Amazon" },
                { src: assets.adobe_logo, alt: "Adobe" }
              ].map((logo, index) => (
                <img 
                  key={index}
                  className="h-5 opacity-80 hover:opacity-100 transition-opacity duration-200" 
                  src={logo.src} 
                  alt={logo.alt}
                />
              ))}
            </div>
        </div>
    </div>
    
  );
};

export default Hero;
