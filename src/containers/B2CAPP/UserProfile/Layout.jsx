import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Routing from "./Routing";
import DataProvider from "./DataContext";

const Layout = () => {
  return (
    <DataProvider>
      <div className="md:pr-6">
        <Header />
        <div className="flex gap-5 py-4 flex-col md:flex-row md:pt-10 pt-20">
          <Sidebar />
          <Routing />
        </div>
      </div>
    </DataProvider>
  );
};

export default Layout;
