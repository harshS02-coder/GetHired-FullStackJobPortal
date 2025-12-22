import React, { useContext } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate = useNavigate()

  const {setShowRecruiterLogin} = useContext(AppContext);

//   return (
//     <Navbar bg="light" >
//       <Container className="flex items-center justify-content-between align-items-center" >
//         {/* Logo / Brand */}
//         <Navbar.Brand href="#">
//           <img onClick = {()=>navigate('/')}
//             src={assets.getHired}
//             height="50"
//             className="d-inline-block align-top"
//             alt="GetHired"
//           />
//         </Navbar.Brand>
//         {
//           user ? (
//             <div className="d-flex align-items-center gap-3">
//               <Link to="/applications" className="text-decoration-none text-dark">
//                 Applied Jobs
//               </Link>
//               <span className="mx-2">|</span>
//               <span className="fw-bold max-sm:hidden">Hi, {user.firstName} {user.lastName}</span>
//               <UserButton />
//             </div>
//           ) : (
//               <div>
//                 <button
//                   onClick= {e=> setShowRecruiterLogin(true)}
//                   style={{ borderRadius: '50px', marginRight: '1rem' }}
//                   type="button"
//                   className="btn btn-light"
//                 >
//                   Recruiter Login
//               </button>
//                 <button
//                   onClick={() => openSignIn()}
//                   style={{ borderRadius: '50px', minWidth: '100px' }}
//                   type="button"
//                   className="btn btn-primary"
//                 >
//                   Login
//               </button>
//               </div>
//             )
//         }
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;

// return (
//   <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
//     <div className="container mx-auto flex items-center justify-between">
    
//       <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
//         <img
//           src={assets.getHired}
//           alt="GetHired"
//           className="h-50 sm:h-10 md:h-12 w- object-contain"
//           style={{
//             maxWidth: '180px',
//             minHeight: '32px'
//           }}
//         />
//       </div>

//       {/* Navigation & User Actions */}
//       {user ? (
//         <div className="flex items-center space-x-4 md:space-x-6">
//           <Link to="/applications" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
//             Applied Jobs
//           </Link>
//           <span className="text-gray-300">|</span>
//           <span className="font-semibold text-gray-800 hidden sm:block">Hi, {user.firstName} {user.lastName}</span>
//           <UserButton />
//         </div>
//       ) : (
//         <div className="flex items-center space-x-3">
//           <button
//             onClick={() => setShowRecruiterLogin(true)}
//             type="button"
//             className="px-4 py-2 text-gray-700 font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
//           >
//             Recruiter Login
//           </button>
//           <button
//             onClick={() => openSignIn()}
//             type="button"
//             className="px-4 py-2 min-w-[100px] text-white font-medium bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
//           >
//             Login
//           </button>
//         </div>
//       )}
//     </div>
//   </nav>
// );
// };

// export default NavBar;


return (
  <nav className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/60 p-4 sticky top-0 z-50 transition-all duration-300">
    <div className="container mx-auto flex items-center justify-between">
    
      {/* Logo */}
      <div 
        className="flex-shrink-0 cursor-pointer group relative" 
        onClick={() => navigate('/')}
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <img
          src={assets.getHired}
          alt="GetHired"
          className="relative h-8 sm:h-10 md:h-12 object-contain transform group-hover:scale-105 transition-transform duration-300"
          style={{
            maxWidth: '180px',
            minHeight: '32px'
          }}
        />
      </div>

      {/* Navigation & User Actions */}
      {user ? (
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link 
            to="/applications" 
            className="text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 flex items-center gap-2 group"
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Applied Jobs
          </Link>
          <span className="text-slate-300">|</span>
          <span className="font-semibold text-slate-800 hidden sm:block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Welcome back, {user.firstName} {user.lastName}!
          </span>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <UserButton />
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowRecruiterLogin(true)}
            type="button"
            className="px-6 py-2.5 text-slate-700 font-semibold rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-slate-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
          >
            Recruiter Login
          </button>
          <button
            onClick={() => openSignIn()}
            type="button"
            className="px-6 py-2.5 min-w-[120px] text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <span className="flex items-center justify-center gap-2">
              Login
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>

    {/* Subtle bottom gradient accent */}
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
  </nav>
);
};

export default NavBar;