import React, { useState, useContext } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const RecruiterPage = () => {
  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(false);
  const [isNextdata, setIsNextdata] = useState(false);

  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    if(state == 'sign up' && !isNextdata){
      setIsNextdata(true);
    }
  }

  const {setShowRecruiterLogin} = useContext(AppContext)

  return (
    <>
      {/* This covers the entire screen with a blurry, semi-transparent background */}
      <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 pointer-events-none" />

      {/* This holds the form, centered and fixed */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <form onSubmit = {onSubmitHandler} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-5 relative z-50">
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            Recruiter {state}
          </h1>
          <p className="text-center text-sm text-gray-500">
            Please {state === 'Login' ? 'log in' : 'Sign up'} to make your dream come true
          </p>
          {state === "sign up" && isNextdata ?
          <>
              <div>
                <label className='flex items-center gap-2' htmlFor="logoUpload">
                  <img className='cursor-pointer w-16' src= {image ? URL.createObjectURL(image) : assets.upload_area} alt="upload logo" />
                  <input id='logoUpload' onChange={e => setImage(e.target.files[0])} accept='recruiterLoginPage/jpg' type="file" hidden/>
                  <p className='bg-gray-200 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Company Logo</p>
                </label>
              </div>
          </>
          :
          // {/* Company Name */}
          <>
           {state !== 'Login' && (
            <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
              <img src={assets.person_icon} alt="person" className="w-5 h-5" />
              <input
                onChange={e => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Company name"
                required
                className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          )}
          

          {/* Email */}
          <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
            <img src={assets.email_icon} alt="email" className="w-5 h-5" />
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Company Email"
              required
              className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 border rounded-lg px-4 py-2 shadow-sm">
            <img src={assets.lock_icon} alt="lock" className="w-5 h-5" />
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
          </>
          }

          {state === 'Login' && <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password</p>}
          
          
          {/* Submit Button */}
          <button
            // onClick= (e=>{})
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
          >
            {state === 'Login' ? 'Login' : isNextdata ? 'Create Account': 'Next'}
          </button>
          {state === 'Login' ? 
              <p className='mt-2 text-center'>Don't have an Account?
                  <span className='cursor-pointer text-blue-600' onClick={()=>(setState("sign up"))}>SignUp</span>
              </p>
              :
              <p className='mt-2 text-center'>Already have an account,
                  <span className='cursor-pointer text-blue-600' onClick={e=>(setState("Login"))}>Login</span>
              </p>
          }
          <img onClick= {e => setShowRecruiterLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} />
        </form>
      </div>
    </>
  );
};

export default RecruiterPage;
