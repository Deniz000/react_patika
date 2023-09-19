import React, { useState, useEffect } from 'react'

function Users() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
      .catch(e=> console.log(e))
      .finally(() => setIsLoading(false));
  }, [])

  return (
    <div>
      {isLoading && <p>Loading ...</p>} 
      {users.map((user, i) => <p key={i}>{user.name}</p>)}
    </div>
  )
}

export default Users