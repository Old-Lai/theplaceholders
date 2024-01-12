import React from 'react';
import FloatingWords from "../components/FloatingWords";
import '../styles/menuPage.sass';
function MenuPage() {
  return (
    <div className='menuBody'>
      <FloatingWords />
      <h1>The Placeholders</h1>
      <ul className='menuLinks'>
        <li className='chrisButton'><a href="/chris">Chris</a></li>
        <li><a href="/oldlai">Henry</a></li>
      </ul>
    </div>
  );
}

export default MenuPage;
