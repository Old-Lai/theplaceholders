import { useEffect, useState } from "react";
import FloatingWords from "../components/FloatingWords";
import '../styles/menuPage.sass';
function MenuPage() {
  const [title, setTitle] = useState("")
  const titleText = "The Placeholders </>"
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitle((prev)=>{
        if(prev.length >= titleText.length){
          document.getElementsByClassName('blinkingCurser')[0].classList.add('hidden')
          clearInterval(titleInterval)
        }
        return titleText.substring(0, prev.length + 1)
      })
    }, 120)
  },[])
  return (
    <>
      <FloatingWords />
      <div className='menuBody'>
        <div className='title-container'>
          <h1 id='title'>{title}</h1>
          <span className='blinkingCurser'>|</span>
        </div>
        <ul className='menuLinks'>
          <li className='chrisButton'><a href="/chris">Chris</a></li>
          <li><a href="/oldlai">Henry</a></li>
        </ul>
      </div>
    </>
  );
}

export default MenuPage;
