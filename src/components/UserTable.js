import Slider from "./Silder";
 import { Button } from 'react-bootstrap';
import { useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
 import { Link} from 'react-router-dom';
import React from 'react'

import Footer from "./Footer";





function UserTable() {
  
    //to take the state for the create

    const [firstName] = useState("");
    const [lastName] = useState("");
    const [email] = useState("");
    const [phoneNo] = useState("");
    const [nic] = useState("");
    const [password] = useState("");
    const [roleId] = useState("");
    const [regNo] = useState("");
     //to catch the data got from backend
    const [] = useState({
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
  //data according to the DB
    const [users,setData] = useState([{firstName:"", lastName:"", email:"", phoneNo:"", nic:"", password:"", roleId:"", regNo:""}]);
   
 // fetched
  useEffect(() => {
    

    const fetchData = async () => {
      fetch(
        "http://localhost:8012/basic/web/index.php?r=user/list-users",
        {
          method: "GET",
        }
      )
      
        .then((response) => response.json())

       .then((json) =>{
           console.log(json)
          setData(json) 
       })
       
        
       .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  },[]);

   
 
//delete function
const DeleteUser = async (nic) => {

    console.log(firstName, lastName, email, phoneNo, nic, password, roleId, regNo);
    await fetch(`http://localhost:8012/basic/web/index.php?r=user/delete-owner&nic=${nic}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        nic: nic,
        phoneNo: phoneNo,
        email: email,
        roleId: roleId,
        regNo: regNo,
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
  
    return (
        <div>
          
            <Slider />
            <div className="nav nav-tabs justify-content-end pt-4">
             
            
            <div>
            <div className="mt-4 text-center"  >
                <h2><b>Registered Users</b></h2>
              </div>
              
                            <Link to="/Registration">  <Button className="form-group" variant="primary"  >Add</Button></Link>
                    <Link to="/Registration">  <Button className="form-group" variant="success">Update</Button></Link>
                   
                    
                
            <div className="container p-3">
            
                {
                    nic!== 0 ?
                    
                        <table className="table table-striped"  >
                          
                        
                            <thead>
                            
                              <tr>
                              <th><strong>ID</strong></th>
                              <th><strong>First Name</strong></th>
                               
                                <th> <strong>Last Name</strong></th>
                                
                                <th> <strong>E mail</strong></th>
                                
                                <th><strong>Contact No</strong></th>
                                <th><strong>NIC</strong></th>
                                <th><strong>Role ID</strong></th>
                                <th><strong>Registration No</strong></th>
                               
                                <th><strong>Action</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                              
                                {
                                    //same as const
                                    users?.map((data, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{data.firstName}</td>
                                            <td>{data.lastName}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phoneNo}</td>
                                            <td>{data.nic}</td>
                                            <td>{data.roleId}</td>
                                            <td>{data.regNo}</td>
                                        <td>
                                            {/* <button  className="btn btn-warning">Sub</button> */}
                                            <Button  className="btn btn-warning mx-1" variant="danger" onClick={() => DeleteUser(data.nic)}>Remove</Button>
                                            <Toaster /> 
                                            {/* <button className="btn btn-warning">Add</button> */}
                                        </td>
                                    </tr>
                                ))
                                    }
                        </tbody>
                        </table>
                        :
                        (<div>
                           
                        </div>)
}
</div>
</div>
</div>
<Footer/>

</div>
    )}
    export default UserTable;
                       
