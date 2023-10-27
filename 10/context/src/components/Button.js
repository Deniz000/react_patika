import React from 'react'
import {useTheme} from '../context/ThemeContext'

export default function Button() {
    const {theme, setTheme} = useTheme();

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