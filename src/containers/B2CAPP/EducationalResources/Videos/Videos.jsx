import React, { useState } from "react";
import Routing from "./Routing";
import DataProvider from "./DataContext";
import VideoPlayer from "./VideoPlayer";
const Videos = () => {
  return (
    <div>
      <section className="flex flex-col md:pl-2 mt-16 md:mt-8">
        <DataProvider>
          <Routing />
        </DataProvider> 
      </section>
    </div>
  );
};

export default Videos;
