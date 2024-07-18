import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import "./theme.css"
const App = () => {
  const [value, setvalue] = useLocalStorage("theme")

  function themeToggler(){
    setvalue(value==="dark"?"light":"dark")
  }

  useEffect(()=>{
    console.log(value);
  })

  return (
    <div data-theme={value} className='ld'>
      <h1>Hello world</h1>
      <button onClick={()=>{themeToggler()}}>Change Theme</button>
    </div>
  )
}

export default App
