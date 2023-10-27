import {useTheme} from '../context/ThemeContext';
import Header from './Header'
import Button from './Button'
import Profile from './Profile';

export default function Container() {
  const {theme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Header />
            <hr />
            <Button />

            <Profile/>
        </div>
    )
}
