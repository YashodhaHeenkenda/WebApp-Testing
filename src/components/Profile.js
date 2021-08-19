import Slider from "./Silder";
import React,{useEffect,useState} from "react"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Footer from "./Footer";


function Profile() {
  //GET data created in user
  
  const [user,setUser] = useState({
    id:" ",
    firstName:" ",
    lastName: " ",
    nic: " ",
    phoneNo: " ",
    email: " ",
    
  });
// fetched
  useEffect(() => {
  const   fetchData = async () => {
      
  try {
    const val= localStorage.getItem('@user');
    const result= JSON.parse(val)
      console.log(result);
     setUser({
       ...user,
       firstName:result.firstName,
       lastName:result.lastName,
       nic:result.nic,
       phoneNo:result.phoneNo,
       email:result.email
     })
  } catch(e) {
    // error reading value
  }
    };
    fetchData();
  },[]);
//displaying the collected data using this form
  return (
    <div>
      <Slider />
      

      <div className="content-wrapper">
        <section className="content-header">
          <div className="card container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-10">
                <form method="post">
                  <h2 className="mt-5 mb-3">User Profile</h2>
                  <hr />
                  

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <div className="input-group mb-3">
                          
                          <span>{user.firstName} </span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <div className="input-group mb-3">
                          <span>{user.email}</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>NIC</label>
                        <div className="input-group mb-3">
                          <span>{user.nic}</span>
                        </div>
                      </div>

                     

                      <div className="form-group">
                        <label>Contact Number</label>
                        <div className="input-group mb-3">
                          <span>{user.phoneNo}</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <div className="input-group mb-3">
                          <span>{user.lastName}</span>
                        </div>
                      </div>

                     
                      <img
                        className="img-fluid mt-3"
                        width="192"
                        height="192"
                        src="https://t3.ftcdn.net/jpg/01/40/46/18/360_F_140461899_dvRngd7xvZtqCUHLiIyRjgflq2EmwnVP.jpg"
                      ></img>
                    </div>

                    <div className="ml-auto">
                    <Link to="/EditProfile">
                    <Button
                        className="btn text-light m-3"
                       
                        type="submit"
                        variant="primary"
                      >
                        Edit Profile
                    </Button>
                    </Link>
                    
                    <Link to="/ChangePassword">
                    <Button
                        className="btn text-light m-3"
                       
                        type="submit"
                        variant="success"
                      >
                        Change Password
                    </Button>
                    </Link>
                                        
                    </div>
                   
                  </div>

                  <hr />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>

    </div>
  );
}

export default Profile;
