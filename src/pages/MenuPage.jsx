import React from 'react';
import FloatingWords from "../components/FloatingWords";
import '../styles/menuPage.sass';
function MenuPage() {
  return (
    <>
      <FloatingWords />
      <div className='menuBody'>
        <h1>The Placeholders</h1>
        <ul className='menuLinks'>
          <li className='chrisButton'><a href="/chris">Chris</a></li>
          <li><a href="/oldlai">Henry</a></li>
        </ul>
      </div>
    </>
  );
}

export default MenuPage;
