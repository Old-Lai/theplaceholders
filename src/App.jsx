import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuPage, ChrisPage, HenryPage, NotFoundPage } from './pages';
import './styles/theme.sass';
import  useDarkMode  from './components/useDarkMode'
import FloatingWords from './components/FloatingWords';
function App() {

  const [theme] = useDarkMode();
  console.log(theme)
  return (
    <div className={theme}>
      <FloatingWords />
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
