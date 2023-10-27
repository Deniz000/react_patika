import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import Header from './Header'
import Button from './Button'
import Profile from './Profile';

export default function Container() {
  const {theme} = useContext(ThemeContext)

    return (
        <div className={`app ${theme}`}>
            <Header />
            <hr />
            <Button />

            <Profile/>
        </div>
    )
}
