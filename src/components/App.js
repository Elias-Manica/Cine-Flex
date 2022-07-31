import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import "./Context";

import "../assets/css/reset.css";
import "../assets/css/style.css";

import Topo from "./Top/Top";
import SelectMovie from "./SelectMovie/SelectMovie";
import SelectHour from "./SelectHour/SelectHour";
import SeatsList from "./SeatsList/SeatsList";
import BoughtTicket from "./BoughtTicket/BoughtTicket";
import Context from "./Context";

export default function App() {
  const [data, setData] = React.useState({});

  return (
    <>
      <BrowserRouter>
        <Context.Provider value={[data, setData]}>
          <Topo />
          <Routes>
            <Route path="/" element={<SelectMovie />} />
            <Route path="/sessoes/:idFilme" element={<SelectHour />} />
            <Route path="/assentos/:idSessao" element={<SeatsList />} />
            <Route path="/sucesso" element={<BoughtTicket />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}
