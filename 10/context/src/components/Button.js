import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

export default function Button() {
    const {theme, setTheme} = useContext(ThemeContext)

    function changeColor(){
        setTheme((color) => color==='dark' ? 'light': 'dark' )
    }

    console.log(theme, 'verisi')
  return (
    <button onClick={changeColor}>
        {theme}
    </button>
  )
}