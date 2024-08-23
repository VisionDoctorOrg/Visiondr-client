import React from "react";
import LandingPage from "./containers/LandingPage/LandingPage";
import AllRouting from "./containers/Routing/AllRouting";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AllRouting />
      </Provider>
    </div>
  );
};

export default App;
