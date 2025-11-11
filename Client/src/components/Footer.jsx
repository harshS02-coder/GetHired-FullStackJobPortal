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

import React from 'react';
// Assuming 'assets' has all the icon properties and the logo
// import { assets } from '../assets/assets';

// --- MOCK ASSETS ---
// Using placeholder assets so the component can be previewed.
// You should replace these with your real 'assets' import.
const assets = {
  getHired: "https://placehold.co/180x50/3182CE/FFFFFF?text=GetHired&font=inter",
  facebook_icon: "https://placehold.co/32x32/6366F1/FFFFFF?text=F&font=inter",
  instagram_icon: "httpsS://placehold.co/32x32/EC4899/FFFFFF?text=I&font=inter",
  twitter_icon: "https://placehold.co/32x32/3B82F6/FFFFFF?text=T&font=inter",
  linkedin_icon: "https://placehold.co/32x32/0E76A8/FFFFFF?text=Li&font=inter",
};
// --- END MOCK ASSETS ---


/**
 * Helper component for social media links.
 * This keeps the main Footer component cleaner.
 */
const SocialLink = ({ href, icon, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
    aria-label={alt}
  >
    <img
      width={32}
      height={32}
      src={icon}
      alt={alt}
      className="object-contain rounded-full" // Added rounded-full for a cleaner look
    />
  </a>
);

/**
 * Helper component for footer navigation links.
 */
const FooterLink = ({ href = "#", children }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white hover:underline transition-all duration-200"
  >
    {children}
  </a>
);

/**
 * A modern, multi-column footer.
 * It's split into a main content area and a sub-footer for copyright and socials.
 */
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 mt-12 shadow-inner">
      <div className="container mx-auto px-4 2xl:px-20">
        
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Logo and About */}
          <div className="md:col-span-1 lg:col-span-2">
            <img
              src={assets.getHired}
              className="h-10 md:h-12 object-contain mb-4"
              alt="GetHired Logo"
              style={{ maxWidth: '180px' }}
            />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Your ultimate destination for finding the perfect job and building a successful career.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">
              Quick Links
            </h5>
            <div className="flex flex-col gap-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Browse Jobs</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Post a Job</FooterLink>
            </div>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h5 className="text-white font-semibold text-lg mb-4 uppercase tracking-wider">
              Legal
            </h5>
            <div className="flex flex-col gap-3">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </div>
          </div>

        </div>

        {/* Bottom section: Copyright and Socials */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            {/* This will automatically update the year */}
            Copyright © {new Date().getFullYear()} Harsh.dev | All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4">
            <SocialLink
              href="#"
              icon={assets.facebook_icon}
              alt="Facebook"
            />
            <SocialLink
              href="https://www.instagram.com/_mr_hrs_02/?hl=en"
              icon={assets.instagram_icon}
              alt="Instagram"
            />
            <SocialLink
              href="#"
              icon={assets.twitter_icon}
              alt="Twitter"
            />
            <SocialLink
              href="#"
              icon={assets.linkedin_icon} // Added LinkedIn as it's professional
              alt="LinkedIn"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
