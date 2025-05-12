import React from "react";

import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Cookies from "js-cookie";

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

  const [state, { dispatch }]: GlobalContextType = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const isLoading = Cookies.get("isLoading");

    if (isLoading) {
      dispatch({ type: "isLoading", payload: true });
    }
  }, [])

  React.useEffect(() => {
    const updateVisitStats = async () => {
      if (location.pathname === "/") {
        await restApi.postRequest("update-visit-time");
      }
    }

    updateVisitStats();
  }, [location])

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ranks" element={<Rank />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/affiliates" element={<Affiliates />} />
      {/* <Route path="/profile" element={<Profile  />} /> */}
      <Route path="/profile" element={state.authToken ? <Profile /> : <Navigate to="/home" />} />

      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  );
}

export default App;
