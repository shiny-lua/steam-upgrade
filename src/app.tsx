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
import { GlobalContextProvider } from "./context";

function App() {

  return (
    <GlobalContextProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ranks" element={<Rank />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/affiliates" element={<Affiliates />} />
      </Routes>
    </GlobalContextProvider>
  );
}

export default App;
