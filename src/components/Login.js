import Common from "./Common";
import bus from "../images/Buzzbuslogo.png";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import swal from 'sweetalert';
import { Button } from 'react-bootstrap';


function Login() {

  localStorage.removeItem('@user')

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //  const[error,setError]=useState("");

  const history = useHistory();
  const navigateTo = () => history.push('/Dashboard');

  const Login = async () => {

    //console.log(email,password);

    //call login func.

    const response = await fetch('http://localhost:8012/basic/web/index.php?r=user/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      //create json and send to backend  
      body: JSON.stringify({
        email: email,
        password: password,

      })

    })

      //if email password sucess send to dashboard
      .then((res) => res.json())
      .then((response) => {
        if (response.success === true) {
          navigateTo('Dashboard');

          //console.log(response);
          //GET to collect data
          fetch(
            `http://localhost:8012/basic/web/index.php?r=user/list-data&email=${email}`, {

            method: "GET",
          }
          )
            .then((response) => response.json())
            .then((responseJson) => {
              //  console.log(responseJson)

              const Value = JSON.stringify(responseJson)
              console.log(Value)
              //localStorage.setItem('@user', Value)
              //picking other data and adding local storage
              localStorage.setItem("@user", JSON.stringify(responseJson));
            })


          //sweet alert

        } else {
          swal({
            text: response.error,
            icon: "error",
          });
        }

      });

  }
  //form designing
  return (
    <div>
      <div>
        <Common />
      </div>
      <div className="container mt-5 mb-5">
        <div className="row mt-5 justify-content-center">
          <div className="col-md-5 mt-5">
            <img src={bus} className="img-fluid" />
          </div>

          <div className="col-md-4 mt-5">
            <div className="mt-5">
              <div className="text-center">
                <h2><b>Login</b></h2>
              </div>
              <div className="card-body">
                <form method="post" >
                  <div className="form-group">
                    <label>Email</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter User Email"
                        autocomplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-user"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <Button type="submit" onClick={Login} type="button" class="btn btn-outline-primary" style={{ color: 'white', backgroundColor: "#000080" }}>Login</Button>
                    
                  </div>
                </form>
                <div className="form-group">
                <span className="fas fa-phone"></span>
                    <a href="tel:076-901-4511" style={{ color: '#000080'}} type="button" >Emergency? Click to contact an admin</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
