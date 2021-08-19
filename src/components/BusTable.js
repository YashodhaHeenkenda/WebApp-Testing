import Slider from "./Silder";
 import { Button } from 'react-bootstrap';
import { useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
 import { Link, useHistory } from 'react-router-dom';
import React from 'react'

import Footer from "./Footer";





function BusTable() {
  
    //to take the state for the create

  const [busNo] = useState("");
  const [noOfSeats] = useState("");
  const [type] = useState("");
  const [routeNo] = useState("");
  const [oid] = useState("");
  const [cid] = useState("");
  //to catch the data got from backend
  const [] = useState({
    busNo: " ",
    noOfSeats: " ",
    type: " ",
    routeNo: " ",
    oid: " ",
    cid: " ",   
  });
  //data according to the DB
    const [buses,setData] = useState([{busNo:"", noOfSeats:"", type:"", routeNo:"",oid:"",cid:"" }]);
   
 // fetched
  useEffect(() => {
    

    const fetchData = async () => {
      fetch(
        "http://localhost:8012/basic/web/index.php?r=bus/list-all",
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
const DeleteBus = async (busNo) => {

    console.log(busNo, noOfSeats, type, routeNo,oid,cid );

    await fetch(`http://localhost:8012/basic/web/index.php?r=bus/delete&busNo=${busNo}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
        busNo: busNo,
        noOfSeats: noOfSeats,
        type:type,
        routeNo: routeNo,
        oid:oid,
        cid:cid,
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
            <div className="nav nav-tabs justify-content-center pt-4">
             
            
            <div>
            <div className="mt-4 text-center"  >
                <h2><b>Available Buses</b></h2>
              </div>
              
                            <Link to="/AddBus">  <Button className="form-group" variant="primary"  >Add</Button></Link>
                    <Link to="/AddBus">  <Button className="form-group" variant="success">Update</Button></Link>
                    
                
            <div className="container p-3">
            
                {
                    busNo!== 0 ?
                    
                        <table className="table table-striped"  >
                          
                        
                            <thead>
                            
                              <tr>
                              <th><strong>ID</strong></th>
                              <th><strong>Bus No</strong></th>
                               
                                <th> <strong>No of Seats</strong></th>
                                
                                <th> <strong>Bus Type</strong></th>
                                
                                <th><strong>Route No</strong></th>
                                
                               
                                <th><strong>Action</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                              
                                {
                                    //same as const
                                    buses?.map((data, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{data.busNo}</td>
                                            <td>{data.noOfSeats}</td>
                                            <td>{data.type}</td>
                                            <td>{data.routeNo}</td>
                                           
                                        <td>
                                            {/* <button  className="btn btn-warning">Sub</button> */}
                                            <Button  className="btn btn-warning mx-1" variant="danger" onClick={() => DeleteBus(data.busNo)}>Remove</Button>
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
          export default BusTable;
                       

    
                                 

                                
                                





                             
                        

