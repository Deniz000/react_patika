import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  const { user, setUser } = useContext(UserContext)


  const [loading, setLoading] = useState(false)

  function handleLogin() {
    setLoading(true)
    setTimeout(() => {
      setUser({
        id: '1',
        name: 'John',
      })
      setLoading(false)
    }, 1000);
  }

  function handleLogOut(){
    setUser(null)
  }
  return (
    <div>
      {!user &&
        <button onClick={handleLogin} >{loading ? 'loading...' : 'Login'}</button>
      }

      <code>{JSON.stringify(user)}</code>

      {user &&
      <button onClick={handleLogOut}>LogOut</button>}
    </div>
  )
}
