// import React, { useContext,useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { assets } from '../assets/assets'; 
// import {AppContext} from '../context/AppContext'

// const Hero = () => {

//     const {setSearchFilter, setIsSearched} = useContext(AppContext)

//     const titleRef = useRef(null);
//     const locationRef = useRef(null);

//     const onSearch = ()=>{
//         setSearchFilter({
//             title : titleRef.current.value,
//             location : locationRef.current.value
//         });
//         setIsSearched(true)
//     }
//   return (
//     <div>
//        <section className="py-8 bg-gradient-to-r from-[#000000] to-[#17021A] relative">
//         {/* Subtle dot pattern overlay */}
//         <div className="absolute inset-0 opacity-10" 
//              style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
//         </div>

//         <div className="container text-center d-flex flex-column justify-content-center align-items-center relative"
//              style={{ minHeight: '50vh' }}>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-100 whitespace-nowrap overflow-hidden border-r-2 border-[#091235] w-fit animate-typing animation-blink">
//             GetHired – Land Your Dream Job
//           </h1>

//           <p className="lead mt-3 mb-0 fw-bold" style={{ color: 'white' }}>
//             Explore 1000+ job opportunities and apply with one click. Your future starts here.
//           </p>

//           {/* Statistics Section */}
//           <div className="mt-6 flex justify-center gap-8 sm:gap-12 text-white/90">
//             <div className="text-center">
//               <div className="text-xl sm:text-2xl font-bold">10,000+</div>
//               <div className="text-xs sm:text-sm opacity-75">Active Jobs</div>
//             </div>
//             <div className="text-center">
//               <div className="text-xl sm:text-2xl font-bold">500+</div>
//               <div className="text-xs sm:text-sm opacity-75">Companies</div>
//             </div>
//             <div className="text-center">
//               <div className="text-xl sm:text-2xl font-bold">1M+</div>
//               <div className="text-xs sm:text-sm opacity-75">Job Seekers</div>
//             </div>
//           </div>

//         <div className="flex flex-col sm:flex-row gap-3 mt-6 px-4 sm:px-0" style={{ maxWidth: '650px', width: '100%' }}>
//           {/* Job search input with icon */}
//           <div className="relative flex-1">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <img
//                 src={assets.search_icon}
//                 alt="Search"
//                 className="w-4 h-4 text-gray-400"
//               />
//             </div>
//             <input
//               type="text"
//               className="block w-full pl-9 pr-3 py-2.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//               placeholder="Job title or keyword"
//               aria-label="Job Search"
//               ref={titleRef}
//             />
//           </div>

//           {/* Location input with icon */}
//           <div className="relative flex-1">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <img
//                 src={assets.location_icon}
//                 alt="Location"
//                 className="w-4 h-4 text-gray-400"
//               />
//             </div>
//             <input
//               type="text"
//               className="block w-full pl-9 pr-3 py-2.5 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//               placeholder="City or location"
//               aria-label="Location"
//               ref={locationRef}
//             />
//           </div>

//           {/* Search Button */}
//           <button
//             onClick={onSearch}
//             type="button"
//             className="py-2.5 px-6 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 shadow-md hover:shadow-lg"
//           >
//             Search Jobs
//           </button>
//         </div>
//       </div>
//     </section>
//         <div className='max-w-5xl mx-auto border border-gray-200 bg-white/80 backdrop-blur-sm shadow-md mt-6 py-4 px-6 rounded-xl'>
//             <div className='flex justify-center items-center gap-6 lg:gap-12 flex-wrap'>
//               <p className='font-medium text-gray-600 text-sm'>Trusted By</p>
//               {[
//                 { src: assets.microsoft_logo, alt: "Microsoft" },
//                 { src: assets.walmart_logo, alt: "Walmart" },
//                 { src: assets.accenture_logo, alt: "Accenture" },
//                 { src: assets.samsung_logo, alt: "Samsung" },
//                 { src: assets.amazon_logo, alt: "Amazon" },
//                 { src: assets.adobe_logo, alt: "Adobe" }
//               ].map((logo, index) => (
//                 <img 
//                   key={index}
//                   className="h-5 opacity-80 hover:opacity-100 transition-opacity duration-200" 
//                   src={logo.src} 
//                   alt={logo.alt}
//                 />
//               ))}
//             </div>
//         </div>
//     </div>
    
//   );
// };

// export default Hero;


import React, { useContext, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../assets/assets'; 
import { AppContext } from '../context/AppContext'

const Hero = () => {
    const { setSearchFilter, setIsSearched } = useContext(AppContext)
    const titleRef = useRef(null);
    const locationRef = useRef(null);

    const onSearch = ()=>{
        setSearchFilter({
            title : titleRef.current.value,
            location : locationRef.current.value
        });
        setIsSearched(true)
    }

//     return (
//         <div>
//             {/* Main Hero Section */}
//             <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-900 via-blue-900/80 to-indigo-900 relative overflow-hidden">
//                 {/* Animated Background Elements */}
//                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.05)_75%)] bg-[length:30px_30px]"></div>
//                 <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

//                 <div className="container text-center relative z-10 flex flex-col justify-center items-center min-h-[60vh]">
//                     {/* Main Heading */}
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-100 via-white to-indigo-100 bg-clip-text text-transparent whitespace-nowrap overflow-hidden border-r-4 border-blue-400 w-fit animate-typing animate-blink mb-4 tracking-tight">
//                         GetHired –Land Your Dream Job
//                     </h1>

//                     {/* Subtitle */}
//                     <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-medium mb-8 max-w-3xl leading-relaxed">
//                         Explore 1000+ job opportunities and apply with one click. Your future starts here.
//                     </p>

//                     {/* Statistics Section */}
//                     <div className="flex justify-center gap-8 sm:gap-16 lg:gap-24 mb-12">
//                         <div className="text-center">
//                             <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">10,000+</div>
//                             <div className="text-sm sm:text-base text-slate-300 font-medium">Active Jobs</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">500+</div>
//                             <div className="text-sm sm:text-base text-slate-300 font-medium">Companies</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">1M+</div>
//                             <div className="text-sm sm:text-base text-slate-300 font-medium">Job Seekers</div>
//                         </div>
//                     </div>

//                     {/* Search Form */}
//                     <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl px-4 sm:px-0">
//                         {/* Job Title Input */}
//                         <div className="relative flex-1 group">
//                             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform duration-300 group-focus-within:scale-110">
//                                 <img
//                                     src={assets.search_icon}
//                                     alt="Search"
//                                     className="w-5 h-5 text-slate-400"
//                                 />
//                             </div>
//                             <input
//                                 type="text"
//                                 className="block w-full pl-12 pr-4 py-4 text-base text-slate-900 border border-slate-200 rounded-2xl bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl focus:shadow-2xl"
//                                 placeholder="Job title or keyword"
//                                 aria-label="Job Search"
//                                 ref={titleRef}
//                             />
//                         </div>

//                         {/* Location Input */}
//                         <div className="relative flex-1 group">
//                             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform duration-300 group-focus-within:scale-110">
//                                 <img
//                                     src={assets.location_icon}
//                                     alt="Location"
//                                     className="w-5 h-5 text-slate-400"
//                                 />
//                             </div>
//                             <input
//                                 type="text"
//                                 className="block w-full pl-12 pr-4 py-4 text-base text-slate-900 border border-slate-200 rounded-2xl bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl focus:shadow-2xl"
//                                 placeholder="City or location"
//                                 aria-label="Location"
//                                 ref={locationRef}
//                             />
//                         </div>

//                         {/* Search Button */}
//                         <button
//                             onClick={onSearch}
//                             type="button"
//                             className="py-4 px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-base font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform focus:shadow-2xl"
//                         >
//                             Search Jobs
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Trusted Companies Section */}
//             <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-lg border border-white/60 shadow-2xl -mt-8 relative z-20 py-6 px-8 rounded-3xl">
//                 <div className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-8">
//                     <p className="font-semibold text-slate-700 text-sm lg:text-base whitespace-nowrap">Trusted By</p>
//                     <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
//                         {[
//                             { src: assets.microsoft_logo, alt: "Microsoft" },
//                             { src: assets.walmart_logo, alt: "Walmart" },
//                             { src: assets.accenture_logo, alt: "Accenture" },
//                             { src: assets.samsung_logo, alt: "Samsung" },
//                             { src: assets.amazon_logo, alt: "Amazon" },
//                             { src: assets.adobe_logo, alt: "Adobe" }
//                         ].map((logo, index) => (
//                             <div key={index} className="group relative">
//                                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                                 <img 
//                                     className="h-6 lg:h-7 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0" 
//                                     src={logo.src} 
//                                     alt={logo.alt}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;


    return (
        <div>
            {/* Main Hero Section */}
            <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900/80 to-indigo-900 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.05)_75%)] bg-[length:30px_30px]"></div>
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

                <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center items-center min-h-[70vh]">
                    {/* Main Heading */}
                    <div className="mb-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                            <span className="bg-gradient-to-r from-blue-200 via-white to-indigo-200 bg-clip-text text-transparent whitespace-nowrap">
                                GetHired
                            </span>
                            <span className="typing-animation text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                – Land Your Dream Job
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-light mb-12 max-w-4xl leading-relaxed">
                        Explore <span className="font-semibold text-blue-300">10,000+</span> job opportunities and apply with one click. 
                        <span className="block mt-2">Your future starts here.</span>
                    </p>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 lg:gap-24 mb-16 w-full max-w-4xl">
                        <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">10,000+</div>
                            <div className="text-base sm:text-lg text-slate-300 font-medium bg-white/5 rounded-lg py-2 px-4 group-hover:bg-white/10 transition-all duration-300">Active Jobs</div>
                        </div>
                        <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">500+</div>
                            <div className="text-base sm:text-lg text-slate-300 font-medium bg-white/5 rounded-lg py-2 px-4 group-hover:bg-white/10 transition-all duration-300">Companies</div>
                        </div>
                        <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">1M+</div>
                            <div className="text-base sm:text-lg text-slate-300 font-medium bg-white/5 rounded-lg py-2 px-4 group-hover:bg-white/10 transition-all duration-300">Job Seekers</div>
                        </div>
                    </div>

                    {/* Search Form */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl px-4 sm:px-0 mb-8">
                        {/* Job Title Input */}
                        <div className="relative flex-1 group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 group-focus-within:scale-110 group-focus-within:text-blue-500">
                                <img
                                    src={assets.search_icon}
                                    alt="Search"
                                    className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-300"
                                />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-4 py-4 text-lg text-slate-900 border-2 border-slate-200/50 rounded-2xl bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-xl hover:shadow-2xl focus:shadow-2xl hover:border-blue-300"
                                placeholder="Job title or keyword"
                                aria-label="Job Search"
                                ref={titleRef}
                            />
                        </div>

                        {/* Location Input */}
                        <div className="relative flex-1 group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 group-focus-within:scale-110 group-focus-within:text-blue-500">
                                <img
                                    src={assets.location_icon}
                                    alt="Location"
                                    className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-300"
                                />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-4 py-4 text-lg text-slate-900 border-2 border-slate-200/50 rounded-2xl bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-xl hover:shadow-2xl focus:shadow-2xl hover:border-blue-300"
                                placeholder="City or location"
                                aria-label="Location"
                                ref={locationRef}
                            />
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={onSearch}
                            type="button"
                            className="py-4 px-12 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg font-semibold rounded-2xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            <span>Search Jobs</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    {/* Quick Search Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {['Software Engineer', 'Marketing', 'Design', 'Remote', 'Finance', 'Sales'].map((tag) => (
                            <button
                                key={tag}
                                className="px-4 py-2 text-sm text-slate-300 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20"
                                onClick={() => {
                                    if (titleRef.current) {
                                        titleRef.current.value = tag;
                                        onSearch();
                                    }
                                }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted Companies Section */}
            <div className="max-w-7xl mx-auto px-4 bg-white/95 backdrop-blur-xl border border-white/70 shadow-2xl -mt-10 relative z-20 py-8 rounded-3xl">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <p className="font-bold text-slate-800 text-lg whitespace-nowrap flex items-center gap-2">
                        <span className="text-blue-600">Trusted</span>
                        <span>By Industry Leaders</span>
                    </p>
                    <div className="h-8 w-px bg-slate-300 hidden sm:block"></div>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                        {[
                            { src: assets.microsoft_logo, alt: "Microsoft", color: "blue" },
                            { src: assets.walmart_logo, alt: "Walmart", color: "blue" },
                            { src: assets.accenture_logo, alt: "Accenture", color: "purple" },
                            { src: assets.samsung_logo, alt: "Samsung", color: "blue" },
                            { src: assets.amazon_logo, alt: "Amazon", color: "orange" },
                            { src: assets.adobe_logo, alt: "Adobe", color: "red" }
                        ].map((logo, index) => (
                            <div 
                                key={index} 
                                className="group relative transform hover:scale-110 transition-all duration-300 cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r from-${logo.color}-500 to-${logo.color}-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm`}></div>
                                <img 
                                    className="h-7 lg:h-8 opacity-80 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0" 
                                    src={logo.src} 
                                    alt={logo.alt}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add custom styles for typing animation */}
            <style jsx="true">{`
                .typing-animation {
                    overflow: hidden;
                    border-right: 3px solid #60a5fa;
                    white-space: nowrap;
                    margin: 0 auto;
                    animation: 
                        typing 3.5s steps(40, end),
                        blink-caret .75s step-end infinite;
                }

                @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                }

                @keyframes blink-caret {
                    from, to { border-color: transparent }
                    50% { border-color: #60a5fa }
                }
            `}</style>
        </div>
    );
};

export default Hero;