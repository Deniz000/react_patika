import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'


export default function Header() {
    const {theme, setTheme} = useContext(ThemeContext)

    function changeColor(){
        setTheme((color)=> color === 'dark' ? 'light' : 'dark')
    }
  return (
    <button onClick={changeColor}>
        {theme}
    </button>
  )
}
