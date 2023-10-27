import React from 'react'
import {useTheme} from '../context/ThemeContext'


export default function Header() {
    const {theme, setTheme} = useTheme()
    console.log(theme)
    function changeColor(){
        setTheme((color)=> color === 'dark' ? 'light' : 'dark')
    }
  return (
    <button onClick={changeColor}>
        {theme}
    </button>
  )
}