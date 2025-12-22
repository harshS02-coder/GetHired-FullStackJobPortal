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
import 'quill/dist/quill.snow.css';



const App = () =>{
  const {showRecruiterLogin} = useContext(AppContext)

  return (
    <div>
      {showRecruiterLogin && <RecruiterPage/>}
      <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/applyjob/:id'  element={<ApplyJobs />} />
        <Route path='/applications' element={<Application />} />
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='addJobs' element={<AddJobs/>} />
          <Route path='manageJobs' element={<ManageJobs/>} />
          <Route path='viewApplications' element={<ViewApplication/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App 