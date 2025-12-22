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

  return (
    <Navbar bg="light" >
      <Container className="flex items-center justify-content-between align-items-center" >
        {/* Logo / Brand */}
        <Navbar.Brand href="#">
          <img onClick = {()=>navigate('/')}
            src={assets.getHired}
            height="50"
            className="d-inline-block align-top"
            alt="GetHired"
          />
        </Navbar.Brand>
        {
          user ? (
            <div className="d-flex align-items-center gap-3">
              <Link to="/applications" className="text-decoration-none text-dark">
                Applied Jobs
              </Link>
              <span className="mx-2">|</span>
              <span className="fw-bold max-sm:hidden">Hi, {user.firstName} {user.lastName}</span>
              <UserButton />
            </div>
          ) : (
              <div>
                <button
                  onClick= {e=> setShowRecruiterLogin(true)}
                  style={{ borderRadius: '50px', marginRight: '1rem' }}
                  type="button"
                  className="btn btn-light"
                >
                  Recruiter Login
              </button>
                <button
                  onClick={() => openSignIn()}
                  style={{ borderRadius: '50px', minWidth: '100px' }}
                  type="button"
                  className="btn btn-primary"
                >
                  Login
              </button>
              </div>
            )
        }
      </Container>
    </Navbar>
  );
};

export default NavBar;
