// // import React from 'react'
// // import { assets } from '../assets/assets';

// // const Footer = () => {
// //   return (
// //     <div className='container h-100 px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-3'>
// //       <img src={assets.getHired} className="h-50 sm:h-10 md:h-12 w- object-contain"
// //           style={{
// //             maxWidth: '180px',
// //             minHeight: '32px'
// //           }} />
// //       <p className='flex-1 border-1 border-gray-100 pl-4 text-gray-500 max-sm:hidden'> Copyright @Harsh.dev | All right reserved.</p>
// //       <div className='flex items-center justify-between gap-2'>
// //         <a href="#" target="_blank" rel="noopener noreferrer">
// //           <img width={38} src={assets.facebook_icon} alt="Facebook" />
// //         </a>

// //         <a href="https://www.instagram.com/_mr_hrs_02/?hl=en" target="_blank" rel="noopener noreferrer">
// //           <img width={38} src={assets.instagram_icon} alt="Instagram" />
// //         </a>

// //         <a href="#" target="_blank" rel="noopener noreferrer">
// //           <img width={38} src={assets.twitter_icon} alt="Twitter" />
// //         </a>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Footer

// import React from 'react';
// // Assuming 'assets' has all the icon properties and the logo
// // import { assets } from '../assets/assets';

// // --- MOCK ASSETS ---
// // Using placeholder assets so the component can be previewed.
// // You should replace these with your real 'assets' import.
// const assets = {
//   getHired: "https://placehold.co/180x50/3182CE/FFFFFF?text=GetHired&font=inter",
//   facebook_icon: "https://placehold.co/32x32/6366F1/FFFFFF?text=F&font=inter",
//   instagram_icon: "httpsS://placehold.co/32x32/EC4899/FFFFFF?text=I&font=inter",
//   twitter_icon: "https://placehold.co/32x32/3B82F6/FFFFFF?text=T&font=inter",
//   linkedin_icon: "https://placehold.co/32x32/0E76A8/FFFFFF?text=Li&font=inter",
// };
// // --- END MOCK ASSETS ---


// /**
//  * Helper component for social media links.
//  * This keeps the main Footer component cleaner.
//  */
// const SocialLink = ({ href, icon, alt }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
//     aria-label={alt}
//   >
//     <img
//       width={32}
//       height={32}
//       src={icon}
//       alt={alt}
//       className="object-contain rounded-full" // Added rounded-full for a cleaner look
//     />
//   </a>
// );

// /**
//  * Helper component for footer navigation links.
//  */
// const FooterLink = ({ href = "#", children }) => (
//   <a
//     href={href}
//     className="text-gray-400 hover:text-white hover:underline transition-all duration-200"
//   >
//     {children}
//   </a>
// );

// /**
//  * A modern, multi-column footer.
//  * It's split into a main content area and a sub-footer for copyright and socials.
//  */
// const Footer = () => {
//   return (
//     <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 mt-12 shadow-inner">
//       <div className="container mx-auto px-4 2xl:px-20">
        
//         {/* Top section with columns */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          
//           {/* Column 1: Logo and About */}
//           <div className="md:col-span-1 lg:col-span-2">
//             <img
//               src={assets.getHired}
//               className="h-10 md:h-12 object-contain mb-4"
//               alt="GetHired Logo"
//               style={{ maxWidth: '180px' }}
//             />
//             <p className="text-gray-400 leading-relaxed max-w-sm">
//               Your ultimate destination for finding the perfect job and building a successful career.
//             </p>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h5 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">
//               Quick Links
//             </h5>
//             <div className="flex flex-col gap-3">
//               <FooterLink href="#">About Us</FooterLink>
//               <FooterLink href="#">Browse Jobs</FooterLink>
//               <FooterLink href="#">Contact</FooterLink>
//               <FooterLink href="#">Post a Job</FooterLink>
//             </div>
//           </div>

//           {/* Column 3: Legal */}
//           <div>
//             <h5 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">
//               Legal
//             </h5>
//             <div className="flex flex-col gap-3">
//               <FooterLink href="#">Privacy Policy</FooterLink>
//               <FooterLink href="#">Terms of Service</FooterLink>
//               <FooterLink href="#">Cookie Policy</FooterLink>
//             </div>
//           </div>

//         </div>

//         {/* Bottom section: Copyright and Socials */}
//         <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
//           {/* Copyright */}
//           <p className="text-gray-500 text-sm text-center md:text-left">
//             {/* This will automatically update the year */}
//             Copyright © {new Date().getFullYear()} Harsh.dev | All rights reserved.
//           </p>

//           {/* Social Media Icons */}
//           <div className="flex items-center justify-center gap-4">
//             <SocialLink
//               href="#"
//               icon={assets.facebook_icon}
//               alt="Facebook"
//             />
//             <SocialLink
//               href="https://www.instagram.com/_mr_hrs_02/?hl=en"
//               icon={assets.instagram_icon}
//               alt="Instagram"
//             />
//             <SocialLink
//               href="#"
//               icon={assets.twitter_icon}
//               alt="Twitter"
//             />
//             <SocialLink
//               href="#"
//               icon={assets.linkedin_icon} // Added LinkedIn as it's professional
//               alt="LinkedIn"
//             />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 backdrop-blur-xl">
      <div className="container px-4 2xl:px-20 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-20"></div>
              <img 
                src="./getHired.png"
                className="relative h-8 sm:h-10 md:h-12 object-contain"
                style={{
                  maxWidth: '180px',
                  minHeight: '32px'
                }} 
                alt="GetHired Logo"
              />
            </div>
          </div>

          {/* Copyright Text */}
          <p className="flex-1 text-center lg:text-left text-slate-400 font-medium text-sm lg:text-base border-l-0 lg:border-l border-slate-700/50 lg:pl-6 transition-all duration-300 hover:text-slate-300">
            Copyright ©{new Date().getFullYear()} Harsh.dev | All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2.5 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-blue-600/20 hover:border-blue-500/30 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <img 
                width={32} 
                src={assets.facebook_icon} 
                alt="Facebook" 
                className="filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </a>

            <a 
              href="https://www.instagram.com/_mr_hrs_02/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2.5 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-pink-600/20 hover:border-pink-500/30 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <img 
                width={32} 
                src={assets.instagram_icon} 
                alt="Instagram" 
                className="filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </a>

            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2.5 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-sky-600/20 hover:border-sky-500/30 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <img 
                width={32} 
                src={assets.twitter_icon} 
                alt="Twitter" 
                className="filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </a>
          </div>
        </div>

        {/* Bottom Border Accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
        
        {/* Additional Info */}
        <div className="py-4 text-center">
          <p className="text-slate-500 text-xs font-medium">
            Built with ❤️ for the future of recruitment
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
// import React from 'react'
// import { assets } from '../assets/assets';

// const Footer = () => {
//   return (
//     <div className='container h-100 px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-3'>
//       <img src={assets.getHired} className="h-50 sm:h-10 md:h-12 w- object-contain"
//           style={{
//             maxWidth: '180px',
//             minHeight: '32px'
//           }} />
//       <p className='flex-1 border-1 border-gray-100 pl-4 text-gray-500 max-sm:hidden'> Copyright @Harsh.dev | All right reserved.</p>
//       <div className='flex items-center justify-between gap-2'>
//         <a href="#" target="_blank" rel="noopener noreferrer">
//           <img width={38} src={assets.facebook_icon} alt="Facebook" />
//         </a>

//         <a href="https://www.instagram.com/_mr_hrs_02/?hl=en" target="_blank" rel="noopener noreferrer">
//           <img width={38} src={assets.instagram_icon} alt="Instagram" />
//         </a>

//         <a href="#" target="_blank" rel="noopener noreferrer">
//           <img width={38} src={assets.twitter_icon} alt="Twitter" />
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Footer

// import React from 'react';
// // Assuming 'assets' has all the icon properties and the logo
// // import { assets } from '../assets/assets';

// // --- MOCK ASSETS ---
// // Using placeholder assets so the component can be previewed.
// // You should replace these with your real 'assets' import.
// const assets = {
//   getHired: "https://placehold.co/180x50/3182CE/FFFFFF?text=GetHired&font=inter",
//   facebook_icon: "https://placehold.co/32x32/6366F1/FFFFFF?text=F&font=inter",
//   instagram_icon: "httpsS://placehold.co/32x32/EC4899/FFFFFF?text=I&font=inter",
//   twitter_icon: "https://placehold.co/32x32/3B82F6/FFFFFF?text=T&font=inter",
//   linkedin_icon: "https://placehold.co/32x32/0E76A8/FFFFFF?text=Li&font=inter",
// };
// // --- END MOCK ASSETS ---


// /**
//  * Helper component for social media links.
//  * This keeps the main Footer component cleaner.
//  */
// const SocialLink = ({ href, icon, alt }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
//     aria-label={alt}
//   >
//     <img
//       width={32}
//       height={32}
//       src={icon}
//       alt={alt}
//       className="object-contain rounded-full" // Added rounded-full for a cleaner look
//     />
//   </a>
// );

// /**
//  * Helper component for footer navigation links.
//  */
// const FooterLink = ({ href = "#", children }) => (
//   <a
//     href={href}
//     className="text-gray-400 hover:text-white hover:underline transition-all duration-200"
//   >
//     {children}
//   </a>
// );

// /**
//  * A modern, multi-column footer.
//  * It's split into a main content area and a sub-footer for copyright and socials.
//  */
// const Footer = () => {
//   return (
//     <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 mt-12 shadow-inner">
//       <div className="container mx-auto px-4 2xl:px-20">
        
//         {/* Top section with columns */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          
//           {/* Column 1: Logo and About */}
//           <div className="md:col-span-1 lg:col-span-2">
//             <img
//               src={assets.getHired}
//               className="h-10 md:h-12 object-contain mb-4"
//               alt="GetHired Logo"
//               style={{ maxWidth: '180px' }}
//             />
//             <p className="text-gray-400 leading-relaxed max-w-sm">
//               Your ultimate destination for finding the perfect job and building a successful career.
//             </p>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h5 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">
//               Quick Links
//             </h5>
//             <div className="flex flex-col gap-3">
//               <FooterLink href="#">About Us</FooterLink>
//               <FooterLink href="#">Browse Jobs</FooterLink>
//               <FooterLink href="#">Contact</FooterLink>
//               <FooterLink href="#">Post a Job</FooterLink>
//             </div>
//           </div>

//           {/* Column 3: Legal */}
//           <div>
//             <h5 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">
//               Legal
//             </h5>
//             <div className="flex flex-col gap-3">
//               <FooterLink href="#">Privacy Policy</FooterLink>
//               <FooterLink href="#">Terms of Service</FooterLink>
//               <FooterLink href="#">Cookie Policy</FooterLink>
//             </div>
//           </div>

//         </div>

//         {/* Bottom section: Copyright and Socials */}
//         <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
//           {/* Copyright */}
//           <p className="text-gray-500 text-sm text-center md:text-left">
//             {/* This will automatically update the year */}
//             Copyright © {new Date().getFullYear()} Harsh.dev | All rights reserved.
//           </p>

//           {/* Social Media Icons */}
//           <div className="flex items-center justify-center gap-4">
//             <SocialLink
//               href="#"
//               icon={assets.facebook_icon}
//               alt="Facebook"
//             />
//             <SocialLink
//               href="https://www.instagram.com/_mr_hrs_02/?hl=en"
//               icon={assets.instagram_icon}
//               alt="Instagram"
//             />
//             <SocialLink
//               href="#"
//               icon={assets.twitter_icon}
//               alt="Twitter"
//             />
//             <SocialLink
//               href="#"
//               icon={assets.linkedin_icon} // Added LinkedIn as it's professional
//               alt="LinkedIn"
//             />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
