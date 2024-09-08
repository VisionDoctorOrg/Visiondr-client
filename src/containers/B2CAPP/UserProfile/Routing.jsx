import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import { DataContext } from './DataContext';
import Notification from './Notification';
import Security from './Security';
import Billing from './Billing';
import AdditionalInformation from './AdditionalInformation';

const Routing = () => {
  const dataContext = useContext(DataContext);
  return (
    <Routes>
      <Route path='/' element={<Profile dataContext={dataContext}/>} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/security" element={<Security />} />
      <Route path="/billing" element={<Billing dataContext={dataContext}/>} />
      <Route path="/additional-information" element={<AdditionalInformation dataContext={dataContext} />} />
    </Routes>
  )
}

export default Routing