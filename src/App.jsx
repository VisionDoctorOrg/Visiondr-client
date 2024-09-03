import React from "react";
import AllRouting from "./containers/Routing/AllRouting";
import { Provider } from "react-redux";
import store from "./store";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "preline/preline";
import { Toaster } from "./components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <div>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AllRouting />
          <Toaster />
        </QueryClientProvider>
      </Provider>
    </div>
  );
};

export default App;
