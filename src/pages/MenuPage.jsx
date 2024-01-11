import React from 'react';
import '../styles/menuPage.sass';
function MenuPage() {
  return (
    <div className='menuBody'>
      <h1>The Placeholders</h1>
      <ul className='menuLinks'>
        <li className='chrisButton'><a href="/chris">Chris</a></li>
        <li><a href="/henry">Henry</a></li>
      </ul>
    </div>
  );
}

export default MenuPage;
