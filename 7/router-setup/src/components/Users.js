import {
    Link,
    Routes,
    Route,
    useMatch
} from "react-router-dom";
import { useState, useEffect } from "react"
import axios from 'axios';
import User from "./User";

function Users() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const match = useMatch("/user");





    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .finally(() => setLoading(false));
    }, [])
    return (
        <div>
            <>
                {loading && <div>Loading...</div>}
                <ul>
                    {
                        users.map((user) => (
                            <li key={user.id}>
                                <Link to={`/${match}/${user.id}`}>{user.name}</Link>
                            </li>
                        ))
                    }
                </ul>

                <Routes>
                    <Route exact path={'/'} />
                    {/* <Route path={match.path} element={<User />} /> */}
                </Routes>
            </>
        </div>
    )
}

export default Users