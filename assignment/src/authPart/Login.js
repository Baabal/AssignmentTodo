import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import UserList from "../components/UserList";
import UserContextProvider from "../contexts/UserContext";
import "../index.css"

function Login() {
  const [email, setEmail] = useState(" ");

  const [password, setPassword] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {

    e.preventDefault()
    ;
    let pass = localStorage
      .getItem("pass")

      .replace(/"/g, "");

    let mail = localStorage.getItem("email").replace(/"/g, "");
    

    if (!email || !password) {
      setFlag(true);
    } 
    
    else if (password !== pass || email !== mail) {
      setFlag(true);


    } 
    
    else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
        
      {home ? (
        <form className="loginregister" onSubmit={handleLogin}>
          <h2 className="authHeading">LOGIN</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="pass-heading">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button><br/>

          {flag && (
            <Alert color="primary" variant="danger">
              Try Again
            </Alert>
          )}
        </form>
      ) : (
        <UserContextProvider>
        <UserList />
      </UserContextProvider>
      )}
    </div>
  );
}

export default Login;
