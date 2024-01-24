import { useEffect, useState } from "react";
import FloatingWords from "../components/FloatingWords";
import '../styles/menuPage.sass';
function MenuPage() {
  const [title, setTitle] = useState("")
  const titleText = "The Placeholders </>"
  useEffect(() => {
    const displayDelay = 1000
    const intervalTime = 120
    let intervalCount = 0
    const titleInterval = setInterval(() => {
      if(intervalCount >= displayDelay){
        setTitle((prev)=>{
          if(prev.length >= titleText.length){
            document.getElementsByClassName('blinkingCurser')[0].classList.add('hidden')
            clearInterval(titleInterval)
          }
          return titleText.substring(0, prev.length + 1)
        })
      }
      console.log(intervalCount, intervalCount >= displayDelay)
      intervalCount+=intervalTime
    }, intervalTime)
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
