import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import RecentlyAddedSection from './RecentlyAddedSection'
import AllVideosSection from './AllVideosSection'
import HistorySection from './HistorySection'
import { DataContext } from './DataContext'
import VideoPage from './VideoPage'

const Routing = () => {
    const dataContext = useContext(DataContext);
  return (
    <Routes>
        <Route path="/" element={<RecentlyAddedSection dataContext={dataContext}/>} />
        <Route path="/allVideos" element={<AllVideosSection dataContext={dataContext}/>} />
        <Route path="/history" element={<HistorySection dataContext={dataContext}/>} />
        <Route path="/videoPage/:index" element={<VideoPage dataContext={dataContext}/>} />

    </Routes>
  )
}

export default Routing