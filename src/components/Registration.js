import Slider from "./Silder";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from 'react-bootstrap';
import React from 'react';


function Registration() {
  //to take the state for the create
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [nic, setNIC] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");
  const [regNo, setRegNo] = useState("");
   //to catch the data got from backend
  const [user, setUser] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    phoneNo: " ",
    nic: " ",
    password: " ",
    roleId: " ",
    regNo: " ",
    error:"",

  });
 //create function
 const CreateUser = async () => {

    console.log(firstName, lastName, email, phoneNo, nic, password, roleId, regNo);

    await fetch('http://localhost:8012/basic/web/index.php?r=user/create', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        nic: nic,
        phoneNo: phoneNo,
        email: email,
        roleId:roleId,
        regNo: regNo,
        password: password,
      })      
    }) 
    .then((response) => response.json())
    .then((response)=>{
      console.log(response);
     if (response.success==true){
      toast.success("You have sucessfully registered a new user")
      
       }else
       toast.error("Registration Denied")
       
      });

  }  
 //update function
  const UpdateUser = async () => {

  console.log(firstName, lastName, email, phoneNo, nic, roleId, regNo);

  await fetch(`http://localhost:8012/basic/web/index.php?r=user/update&nic=${nic}`, {
   method: 'PUT', // *GET, POST, PUT, DELETE, etc.


  body: JSON.stringify({
 firstName: user.firstName,
  lastName: user.lastName,
nic: user.nic,
  phoneNo: user.phoneNo,
  email: user.email,
 roleId: user.roleId,
regNo: user.regNo,
})
     })
     .then((response) => response.json())
     .then((response)=>{
       console.log(response);
      if (response.success==true){
       toast.success("Successfully updated")
       
        }else
        toast.error("Unsuccessful update")
        
       });

   }
//delete function
  const DeleteUser = async () => {

    console.log(firstName, lastName, email, phoneNo, nic, password, roleId, regNo);
    await fetch(`http://localhost:8012/basic/web/index.php?r=user/delete-owner&nic=${nic}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        nic: user.nic,
        phoneNo: user.phoneNo,
        email: user.email,
        roleId: user.roleId,
        regNo: user.regNo,
      })
    })
    .then((response) => response.json())
     .then((response)=>{
       console.log(response);
      if (response.success==true){
       toast.success("Successfully deleted")
       
        }else
        toast.error("Unsuccessful delete")
        
       });
  }
//search function
  const SearchUser = async () => {

    console.log(firstName, lastName, email, phoneNo, nic, roleId, regNo);


    const response = await fetch(`http://localhost:8012/basic/web/index.php?r=user/view-owner&nic=${nic}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setUser({
          ...user,
          firstName: responseJson.firstName,
          lastName: responseJson.lastName,
          nic: responseJson.nic,
          phoneNo: responseJson.phoneNo,
          email: responseJson.email,
          roleId: responseJson.roleId,
          regNo: responseJson.regNo,

        });
      })
      .catch((error) => {
        console.error(error);
      })
  }
  //refresh function

  function refreshPage() {
    window.location.reload(false);
  }



  return (
   
    <div>
     <Slider  />

      <div className="container justify-content-center mt-3">
      
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card-header border-bottom-0 bg-transparent">
              <div className="mt-4 text-center">
                <h2>Registration</h2>
                
                
              </div>
              <ul
                className="nav nav-tabs justify-content-center pt-4"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active text-primary"
                    id="pills-login-tab"
                    data-toggle="pill"
                    href="#pills-login"
                    role="tab"
                    aria-controls="pills-login"
                    aria-selected="true"
                  >
                    Add New User Account
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-primary"
                    id="pills-register-tab"
                    data-toggle="pill"
                    href="#pills-register"
                    role="tab"
                    aria-controls="pills-register"
                    aria-selected="false"
                  >
                    Alter User Account
                  </a>
                </li>
              </ul>
            </div>

             {/*Add New User Account form */}

            <div className="card-body pb-4">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="pills-login-tab"
                >
                  <form method="post">
                    <div className="form-group">
                    <label>User Type</label>
                       <select 
                          className="form-control"
                          defaultInputValue="Select User Type"


                          onChange={(e) => {
                            setRoleId(e.target.value);
                          }}
                          
                        >
                          <option value=" "> </option> 
                          <option value="3">Bus Owner</option>                                                 
                          <option value="4">Bus Conductor</option>
                          <option value="1">Admin</option>       
                        </select>
                    </div>
                    
                    {roleId == "4" && (
                        <div className="form-group">
                          <label>Registration Number</label>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Registration Number of Conductor"
                              autocomplete="off" 
                              onChange={(e) => setRegNo(e.target.value)}
                              required
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fa fa-sort"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    
                   <div className="form-group">
                         <label>First Name</label>
                         <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter First Name"
                            autocomplete="off" 
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fa fa-sort"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Last Name</label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                            autocomplete="off" 
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fa fa-sort"></span>
                            </div>
                          </div>
                        </div>
                      </div>



                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>NIC</label>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter NIC"
                                autocomplete="off"
                                onChange={(e) => setNIC(e.target.value)}
                                maxLength="10"
                                required 
                              />
                              <div className="input-group-append">
                                <div className="input-group-text">
                                  <span className="fa fa-sort"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                       </div>

                      <div className="form-group">
                        <label>Email Address</label>
                        <div className="input-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                            autocomplete="off"
                            onChange={(e) => setEmail(e.target.value)} 
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fa fa-sort"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone number</label>
                            <div className="input-group mb-3">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Enter User Name for the User"
                                autocomplete="off"
                                onChange={(e) => setPhoneNo(e.target.value)} 
                             
                                maxLength="10"
                                required
                              />
                              <div className="input-group-append">
                                <div className="input-group-text">
                                  <span className="fa fa-sort"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Password</label>
                            <div className="input-group mb-3">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password for the User"
                                autocomplete="off" 
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                              <div className="input-group-append">
                                <div className="input-group-text">
                                  <span className="fa fa-sort"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>                  

                    <div className="form-group">
                    <Button type="submit" onClick={CreateUser} type="Button" variant="primary" >Add</Button> 
                    <Toaster /> 
                    </div>
                  </form>
                </div>

                {/*Alter User Accounts form */}

                <div
                  className="tab-pane fade"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="pills-register-tab"
                >
                  <form method="post">

                  <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>NIC</label>
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter NIC"
                                autocomplete="off" 
                                onChange={(e) => setNIC(e.target.value)}
                                maxLength="10"
                                required
                              />
                              <div className="input-group-append">
                                <div className="input-group-text">
                                  <span className="fa fa-sort"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       </div>

                    <div className="form-group">
                    <label>User Type</label>
                       <select 
                          className="form-control"
                          onChange={(e) => {
                            setRoleId(e.target.value);
                          }}
                          
                        >
                           <option value="1">Admin</option> 
                          <option value="3">Bus Owner</option>                                                 
                          <option value="4">Bus Conductor</option>
                        </select>
                    </div>
                    
                    {roleId == "4" && (
                        <div className="form-group">
                          <label>Registration Number</label>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Registration Number of Conductor"
                              autocomplete="off" 
                              onChange={(e) => setUser({
                                ...user,
                                regNo: e.target.value
                              })}
                              value={user.regNo}
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fa fa-sort"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    
                        <div className="form-group">
                         <label>First Name</label>
                         <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter First Name"
                            autocomplete="off"
                            onChange={(e) => setUser({
                              ...user,
                              firstName: e.target.value
                            })}
                            value={user.firstName} 
                            required
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fa fa-sort"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Last Name</label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                            autocomplete="off" 
                            onChange={(e) => setUser({
                              ...user,
                              lastName: e.target.value
                            })}
                            value={user.lastName}
                            required
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fa fa-sort"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Email Address</label>
                        <div className="input-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                            autocomplete="off" 
                            onChange={(e) => setUser({
                              ...user,
                              email: e.target.value
                            })}
                            value={user.email}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fa fa-sort"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-md-6">
                          
                            <label>Phone number</label>
                            <div className="input-group mb-3">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Enter User's phone number"
                                autocomplete="off"
                                onChange={(e) => setUser({
                                  ...user,
                                  phoneNo: e.target.value
                                })}
                                value={user.phoneNo}
                                maxLength="10"
                                required 
                              />
                              <div className="input-group-append">
                                <div className="input-group-text">
                                  <span className="fa fa-sort"></span>
                                </div>
                              </div>
                            </div>
                           </div>                      
                      </div>    

                      
                         
                                  
                    
                    <div className="row">

                    <div className="col-md-6" size="sm" class="btn btn-space">
                        <Button type="submit" onClick={SearchUser} type="button" variant="info" >Search</Button>
                        
      
                      </div>

                      <div className="col-md-6" class="btn btn-space" >
                        <Button type="submit" onClick={UpdateUser}  type="button" variant="success"  >Update    </Button>
                        <Toaster /> 
                      </div>

                      
                      <div className="col-md-6" size="sm" class="btn btn-space">
                      <Button type="reset" onClick={refreshPage} type="button" variant="warning" style = {{color:"white"}} >Reset</Button>
                      
                      </div>               


                      <div className="col-md-6" size="sm" class="btn btn-space">
                        <Button type="submit" onClick={DeleteUser} type="button" variant="danger"  >Delete</Button>
                        <Toaster /> 
                      </div>

                      

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  
  );
}

export default Registration;
