import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListSurat from "./pages/listSurat";
import AsmaulHusna from "./pages/asmaulHusna"
import Home from  "./pages/Home"
import Surat from  "./pages/Surat"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="list-surat" element={<ListSurat/>}></Route>
          <Route path="asmaul-husna" element={<AsmaulHusna/>}></Route>
          <Route path="ayat-surat/:suratId" element={<Surat/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
