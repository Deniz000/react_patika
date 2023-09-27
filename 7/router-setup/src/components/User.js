import { useState, useEffect } from 'react'
import {
  useParams,
  Link
} from 'react-router-dom';
import axios from 'axios';

function User() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});


  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response))
      .finally(() => setLoading(false))
  }, [id]);

  return (
    <div>
      {loading && <div>Loading..</div>}
      {!loading && <code>
        {JSON.stringify(user, null, 2)}
      </code>}

  <Link to={`/user/${parseInt(id) + 1}`}>Next USer</Link>
    </div>
  )
}

export default User