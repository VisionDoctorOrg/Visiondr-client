import React, { useState } from "react";
import Routing from "./Routing";
import DataProvider from "./DataContext";

const Articles = () => {
  return (
    <div>
      <section className="flex flex-col md:pl-2">
        <DataProvider>
          <Routing />
        </DataProvider>
      </section>
    </div>
  );
};

export default Articles;
