import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import RecentlyAddedSection from './RecentlyAddedSection'
import AllInfographicsSection from './AllInfographicsSection'
import HistorySection from './HistorySection'
import { DataContext } from './DataContext'
import InfographicsPage from './InfographicsPage'

const Routing = () => {
    const dataContext = useContext(DataContext);
  return (
    <Routes>
        <Route path="/" element={<RecentlyAddedSection dataContext={dataContext}/>} />
        <Route path="/allInfographics" element={<AllInfographicsSection dataContext={dataContext}/>} />
        <Route path="/history" element={<HistorySection dataContext={dataContext}/>} />
        <Route path="/infographicsPage/:index" element={<InfographicsPage dataContext={dataContext}/>} />
    </Routes>
  )
}

export default Routing