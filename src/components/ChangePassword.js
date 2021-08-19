import Slider from "./Silder";
import { useState,useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from 'react-bootstrap';
import { Navigation } from "@material-ui/icons";
import {useHistory } from "react-router-dom";
import React from 'react';




function ChangePassword() {
  //to take the state for the create
    
    const [email, setemail] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const[ reenteredpassword,setreenteredpassword]=useState("");
    const[password,setpassword]=useState("");
    
    

    
      //update function
    
    const UpdatePassword = async () => {
     

      console.log( email,password,newpassword,reenteredpassword); 

  
      await fetch(`
      http://localhost:8012/basic/web/index.php?r=user/change-password&email=${email}&password=${password}`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.  
  
        body: JSON.stringify({
          newpassword:newpassword,
    reenteredpassword:reenteredpassword
          
  
        })
      })
      .then((response) => response.json())
    .then((response)=>{
      console.log(response);
     if (response.success==true){
      toast.success("Successfully updated the password")
     
     
      
          
      
             
      }
       else{toast.error(response.error)}

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
                      <h2>Change Your Password</h2>
                    </div>
                    <div className="card-body">
                      <form method="post">
                        

                        


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

                              onChange={(e)=>setemail(e.target.value)}

                              
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
                          <label>Current Password</label>
                          <div className="input-group mb-3">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Enter Your Current Password"
                              autocomplete="off" 
                              onChange={(e)=>setpassword(e.target.value)}

                              
                              
                              required
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-key"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>New Password</label>
                          <div className="input-group mb-3">
                            <input
                              type="password"
                              className="form-control"
                              name="newpassword"
                              placeholder="Enter a new password"
                              autocomplete="off"
                              onChange={(e)=>setnewpassword(e.target.value)}

                              
                             
                              required
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-key"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Re Enter the Password</label>
                          <div className="input-group mb-3">
                            <input
                              type="password"
                              className="form-control"
                              name="reenteredpassword"
                              placeholder="Re enter the password"
                              autocomplete="off"
                              onChange={(e)=>setreenteredpassword(e.target.value)}

                               
                             
                              required
                            />
                            <div className="input-group-append">
                              <div className="input-group-text">
                                <span className="fas fa-key"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-md-6" size="sm">
                            <Button type="submit" type="button" onClick={UpdatePassword} variant="success">Confirm </Button>
                            <Toaster /> 
                        
                          </div>

                          <div>

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


export default ChangePassword;
