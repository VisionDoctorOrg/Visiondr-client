import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import RecentlyAddedSection from './RecentlyAddedSection'
import AllArticlesSection from './AllArticlesSection'
import HistorySection from './HistorySection'
import { DataContext } from './DataContext'
import ArticlePage from './ArticlePage'

const Routing = () => {
    const dataContext = useContext(DataContext);
  return (
    <Routes>
        <Route path="/" element={<RecentlyAddedSection dataContext={dataContext}/>} />
        <Route path="/allArticles" element={<AllArticlesSection dataContext={dataContext}/>} />
        <Route path="/history" element={<HistorySection dataContext={dataContext}/>} />
        <Route path="/articlePage/:index" element={<ArticlePage dataContext={dataContext}/>} />
    </Routes>
  )
}

export default Routing