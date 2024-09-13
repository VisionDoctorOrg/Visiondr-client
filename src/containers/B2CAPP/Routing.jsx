import React from "react";
import RefractiveErrorChecker from "./RefractiveError/RefractiveErrorChecker";
import { Navigate, Route, Routes } from "react-router-dom";
import RefractiveErrorReport from "./RefractiveError/RefractiveErrorReport";
import GlaucomaReport from "./Glaucoma/GlaucomaReport";
import GlaucomaChecker from "./Glaucoma/GlaucomaChecker";
import CaseFile from "./CaseFiles/CaseFile";
import Dashboard from "./Dashboard/Dashboard";
import Articles from "./EducationalResources/Articles/Articles";
import Logout from "./Logout";
import Recommendation from "./CaseFiles/Recommendation";
import Layout from "./UserProfile/Layout";
import Videos from "./EducationalResources/Videos/Videos";
import Infographics from "./EducationalResources/Infographics/Infographics";
import Community from "./EducationalResources/Community/Community";
import Podcasts from "./EducationalResources/Podcasts/Podcasts";

const Routing = () => {
  return (
    <div className="mt-8 md:ml-1">
      <Routes>
        <Route path="/" element={<Navigate to="/app/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/refractive-error" element={<RefractiveErrorChecker />} />
        <Route
          path="/refractive-error/refractiveErrorReport"
          element={<RefractiveErrorReport />}
        />
        <Route path="/glaucoma" element={<GlaucomaChecker />} />
        <Route path="/glaucoma/glaucomaReport" element={<GlaucomaReport />} />
        <Route path="/add-new" element={<CaseFile />} />
        <Route path="recommendation" element={<Recommendation />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/articles/*" element={<Articles />} />
        <Route path="/videos/*" element={<Videos />} />
        <Route path="/infographics/*" element={<Infographics />} />
        <Route path="/community/*" element={<Community />} />
        <Route path="/podcast/*" element={<Podcasts />} />
        <Route path="/profile/*" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default Routing;
