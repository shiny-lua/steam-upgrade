import React from "react";

import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home";
import Rank from "./pages/ranks";
import Orders from "./pages/orders";
import Affiliates from "./pages/affiliates";
import Profile from "./pages/profile";
import Inventory from "./pages/inventory";

import { GlobalContextProvider, useGlobalContext } from "./context";
import { restApi } from "./context/restApi";

function App() {

  return (
    <GlobalContextProvider>
      <Routers />
    </GlobalContextProvider>
  )
}

const Routers = () => {
  
  const [state]: GlobalContextType = useGlobalContext();

  // React.useEffect(() => {
  //   console.log("state.authToken", state.authToken)
  //   restApi.setAuthToken(state.authToken);
  // }, [state.authToken])

  return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ranks" element={<Rank />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/affiliates" element={<Affiliates />} />
        {/* <Route path="/profile" element={<Profile  />} /> */}
        <Route path="/profile" element={state.authToken ? <Profile /> : <Navigate to="/home" />}  />
        
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
  );
}

export default App;
