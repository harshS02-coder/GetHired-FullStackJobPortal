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

return (
  <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between">
    
      <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
        <img
          src={assets.getHired}
          alt="GetHired"
          className="h-50 sm:h-10 md:h-12 w- object-contain"
          style={{
            maxWidth: '180px',
            minHeight: '32px'
          }}
        />
      </div>

      {/* Navigation & User Actions */}
      {user ? (
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to="/applications" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
            Applied Jobs
          </Link>
          <span className="text-gray-300">|</span>
          <span className="font-semibold text-gray-800 hidden sm:block">Hi, {user.firstName} {user.lastName}</span>
          <UserButton />
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowRecruiterLogin(true)}
            type="button"
            className="px-4 py-2 text-gray-700 font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
          >
            Recruiter Login
          </button>
          <button
            onClick={() => openSignIn()}
            type="button"
            className="px-4 py-2 min-w-[100px] text-white font-medium bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Login
          </button>
        </div>
      )}
    </div>
  </nav>
);
};

export default NavBar;
