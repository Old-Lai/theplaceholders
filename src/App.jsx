import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuPage, ChrisPage, HenryPage, NotFoundPage } from './pages';
import './styles/theme.css';
import  useDarkMode  from './components/useDarkMode'
function App() {
  const [theme] = useDarkMode();
  return (
    <div className={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/chris" element={<ChrisPage />} />
        <Route path="/henry" element={<HenryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}



export default App;
