import { useEffect, useState } from 'react'
import BackButton from '../../components/BackButton'
import scrambleAppearEffect from './helper/scrambleAppearEffect'
import '../../styles/oldlai/pages_style/OldlaiPage.sass'
function OldlaiPage() {
  const [title, setTitle] = useState("")
  useEffect(() => {
    const titleText = "This is Henry's page"
    const intervalTimer = 30
    const effectDuration = 1500
    scrambleAppearEffect(titleText, intervalTimer, effectDuration, setTitle)
  },[])
  return (
    <div>
      <BackButton /> 
      <h1>{title}</h1>
      {/* Additional content goes here */}
    </div>
  )
}

export default OldlaiPage
