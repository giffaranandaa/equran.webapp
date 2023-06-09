import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routes from "./Router/Routes"


function App() {
  return (
    <div>
      <Routes/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="list-surat" element={<ListSurat/>}></Route>
          <Route path="asmaul-husna" element={<AsmaulHusna/>}></Route>
          <Route path="ayat-surat/:suratId" element={<Surat/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
