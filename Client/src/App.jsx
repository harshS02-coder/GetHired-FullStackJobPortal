import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homes from './pages/Homes';
import ApplyJobs from './pages/ApplyJobs';
import Application from './pages/Applications';
import RecruiterPage from './components/RecruiterPage';
import { AppContext } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import AddJobs from './pages/AddJobs';
import ManageJobs from './pages/ManageJobs';
import ViewApplication from './pages/ViewApplication';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import 'quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () =>{
  const {showRecruiterLogin, companyToken} = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && <RecruiterPage/>}
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/applyjob/:id'  element={<ApplyJobs />} />
        <Route path='/applications' element={<Application />} />
        <Route
            path="/forgotpassword"
            element={<ForgotPassword />}
          />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path='/dashboard' element={<Dashboard/>}>
          {companyToken ? <>
            <Route path='addJobs' element={<AddJobs/>} />
          <Route path='manageJobs' element={<ManageJobs/>} />
          <Route path='viewApplications' element={<ViewApplication/>} />
          </> : null }
        </Route>
      </Routes>
    </div>
  )
}

export default App 