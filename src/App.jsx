import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuPage, ChrisPage, HenryPage, NotFoundPage } from './pages';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/chris" element={<ChrisPage />} />
        <Route path="/henry" element={<HenryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
