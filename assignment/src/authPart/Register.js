import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import "../index.css"


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);


  function handleFormSubmit(e) {

    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);

      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem(
        "pass",
        JSON.stringify(password)
      );

      console.log("=====================");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }


 

  return (
    <>
 
        <div>
         
          {login ? (
            <form className="loginregister" onSubmit={handleFormSubmit}>
              <h2 className="authHeading">REGISTER</h2>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

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
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                </div>


              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button><br/>

              {/* <button  className="btn btn-dark btn-lg btn-block">
                log in?                
              </button> */}
              <p className="loginin">Already Registered!  <button class="btn btn-outline-secondary" type="submit" onClick={handleClick} >Click here</button></p>
              <br/>
              
              {flag && (
                <Alert variant="danger">
                  Fill All Details
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Register;
