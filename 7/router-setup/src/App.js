import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import './App.css';

import Users from "./components/Users";
import User from "./components/User";
import Home from "./components/Home";
import Error404 from "./components/Error404";

function App() {
  return (
    
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              
              {/* <li>
                <Link to="/user">Users</Link>
              </li> */}
            </ul>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Error404 />} />
            {/* <Route path="/user/:id" element={<User />} /> */}
          </Routes>
        </div>
      </Router>
  );
}


function About() {
  return <h2>About</h2>;
}



export default App;