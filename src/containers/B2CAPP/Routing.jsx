import React from 'react'
import RefractiveErrorChecker from './RefractiveError/RefractiveErrorChecker'
import { Navigate, Route, Routes } from 'react-router-dom'
import RefractiveErrorReport from './RefractiveError/RefractiveErrorReport'
import GlaucomaReport from './Glaucoma/GlaucomaReport'
import GlaucomaChecker from './Glaucoma/GlaucomaChecker'

const Routing = () => {
  return (
    <div className='mt-8 ml-1'>

      <Routes>
        <Route path="/"  element={<Navigate to="/app/dashboard" />} />
        <Route path="/refractive-error" element={<RefractiveErrorChecker />} />
        <Route path="/refractive-error/refractiveErrorReport" element={<RefractiveErrorReport />} />
        <Route path="/glaucoma" element={<GlaucomaChecker />} />
        <Route path="/glaucoma/glaucomaReport" element={<GlaucomaReport />} />
      </Routes>

    </div>
  )
}

export default Routing