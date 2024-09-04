import React from 'react'
import RefractiveErrorChecker from './RefractiveError/RefractiveErrorChecker'
import { Navigate, Route, Routes } from 'react-router-dom'
import RefractiveErrorReport from './RefractiveError/RefractiveErrorReport'
import GlaucomaReport from './Glaucoma/GlaucomaReport'
import GlaucomaChecker from './Glaucoma/GlaucomaChecker'
import CaseFile from './CaseFiles/CaseFile'
import Dashboard from './Dashboard/Dashboard'
import Articles from './EducationalResources/Articles/Articles'
import Logout from './Logout'

const Routing = () => {
  return (
    <div className='mt-8 md:ml-1'>

      <Routes>
        <Route path="/"  element={<Navigate to="/app/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/refractive-error" element={<RefractiveErrorChecker />} />
        <Route path="/refractive-error/refractiveErrorReport" element={<RefractiveErrorReport />} />
        <Route path="/glaucoma" element={<GlaucomaChecker />} />
        <Route path="/glaucoma/glaucomaReport" element={<GlaucomaReport />} />
        <Route path="/add-new" element={<CaseFile/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/articles/*" element={<Articles/>} />
      </Routes>

    </div>
  )
}

export default Routing