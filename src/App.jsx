import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuPage, ChrisPage, OldlaiPage, NotFoundPage } from "./pages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/chris" element={<ChrisPage />} />
          <Route path="/oldlai" element={<OldlaiPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
