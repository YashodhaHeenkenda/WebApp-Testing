import Slider from "./Silder";
import { useState,useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from 'react-bootstrap';
import { Navigation } from "@material-ui/icons";
import {useHistory } from "react-router-dom";
import StickyFooter from 'react-sticky-footer';
import React from 'react';


function EditProfile() {
  //to take the state for the create
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [nic, setNIC] = useState("");
     //to catch the data got from backend
    const [user, setUser] = useState({
      firstName: " ",
      lastName: " ",
      email: " ",
      phoneNo: " ",
      nic: " ",
      roleId:" ",
      password:" ",
    });
    

    useEffect(() => {
      const   fetchData = async () => {
          
      try {
        // const val= localStorage.getItem('@user');
        // const result= JSON.parse(val)
        //   console.log(result);
        //   setUser(JSON.parse(result));
        
         
            const result = localStorage.getItem('@user');
            if (result) {
              console.log(result);
              const val= setUser(JSON.parse(result));
            }
          
        

        //  setUser({
           
        //   //  id:result.id,
        //   //  firstName:result.firstName,
        //   //  lastName:result.lastName,
        //   //  nic:result.nic,
        //   //  phoneNo:result.phoneNo,
        //   //  email:result.email,
        //   //  roleId:result.roleId,
        //   //  password:result.password,
        //   //  regNo:result.regNo,
        //  })
      } catch(e) {
        // error reading value
      }
        };
        fetchData();
      },[]);
      
      //update function
    
    const UpdateUser = async () => {

      console.log(firstName, lastName, email, phoneNo, nic);  
  
      await fetch(`
      http://localhost:8012/basic/web/index.php?r=user/edit-profile&id=${user.id}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.  
  
        body: JSON.stringify({
          ...user,
          id:user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          nic: user.nic,
          phoneNo:user.phoneNo,
          email: user.email,
          roleId: user.roleId,
          password:user.password,
          regNo:user.regNo,
          
  
        })
      })
      .then((response) => response.json())
    .then((response)=>{
      console.log(response);
     if (response.success==true){
      toast.success("Successfully updated")
     
     
      
          
      fetch(
        `http://localhost:8012/basic/web/index.php?r=user/list-data&email=${user.email}`,{
          
                method: "GET",
              }
            )
              .then((response) => response.json())
              .then((responseJson) => {
                localStorage.setItem(
                  '@user',
                  JSON.stringify(responseJson));
                 console.log(responseJson)

             //  console.log(Value)
        
              })
  }

})

  .catch((error) => {
    console.error(error);
  });
};

      
      
    
  
  return (
    <div>
      <Slider />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">

            <div className="row mt-9 justify-content-center">
              <div className="col-md-5 mt-5">
                <div className="col-md-16 mt-5">
                  <div className="mt-5">
                    <div className="text-center">
                      <h2>Edit Your Profile</h2>
                    </div>
                    <div className="card-body">
                      <form method="post">
                        <div className="form-group">
                          <label>First Name</label>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="fname"
                              placeholder="Enter Your First Name"
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
                                <span className="fas fa-user-edit"></span>
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
                              name="lname"
                              placeholder="Enter Your Last Name"
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
                                <span className="fas fa-user-edit"></span>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="form-group">
                          <label> E mail</label>
                          <div className="input-group mb-3">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Enter Your E mail Address"
                              autocomplete="off"
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

                              onChange={(e) => setUser({
                                ...user,
                                email: e.target.value
                              })}
                              value={user.email} 
                              required
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-envelope"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>NIC</label>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="nic"
                              placeholder="Enter Your NIC Number"
                              autocomplete="off" 
                              onChange={(e) => setUser({
                                ...user,
                                nic: e.target.value
                              })}
                              value={user.nic}
                              maxLength="10"
                              required
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-id-card"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Contact Number</label>
                          <div className="input-group mb-3">
                            <input
                              type="number"
                              className="form-control"
                              name="Cnumber"
                              placeholder="Enter Your Contact Number"
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
                                <span className="fas fa-phone"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-md-6" size="sm">
                            <Button type="submit" type="button" onClick={UpdateUser} variant="success">Update</Button>
                            <Toaster /> 
                        
                          </div>

                          <div>



                            {/* <button
                              className="btn text-light mr-3"
                              style={{ backgroundColor: "Blue", marginTop: -60, marginLeft: 390 }}
                              type="reset"
                            >
                              Reset
                            </button> */}

                          </div>


                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


export default EditProfile;
