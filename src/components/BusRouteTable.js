import Slider from "./Silder";

 import { Button } from 'react-bootstrap';
import { useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
 import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import Footer from "./Footer";





function BusRouteTable() {
  
    //to take the state for the create
    const findRoute=useState("");
    const [routeNo] = useState("");
    const [start] = useState("");
    const [end] = useState("");
    const [price] = useState("");
     //to catch the data got from backend
    const [] = useState({
      routeNo: " ",
      start: " ",
      end: " ",
      price: " ",
    });
  //data according to the DB
    const [busRoutes,setData] = useState([{routeNo:" ",start:" ",end:"" ,price:""}]);
   
 // fetched
  useEffect(() => {
    

    const fetchData = async () => {
      fetch(
        "http://localhost:8012/basic/web/index.php?r=busroute/list-all",
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

  // const findRoute =busRoutes?.map((routeNo,i)=>routeNo.routeNo) ;
  // console.log(findRoute);
  //delete function
    const DeleteRoute = async (routeNo) => {
        
        
  
      console.log(routeNo);
  
      await fetch(`http://localhost:8012/basic/web/index.php?r=busroute/delete&routeNo=${routeNo}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
        body: JSON.stringify({
          // routeNo: routeNo,
          start: start,
          end: end,
          price: price,
  
        }),
        
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
                <h2><b>Available Bus Routes</b></h2>
              </div>
              
                            <Link to="/ManageBusRoute">  <Button className="form-group" variant="primary"  >Add</Button></Link>
                    <Link to="/ManageBusRoute">  <Button className="form-group" variant="success">Update</Button></Link>
                    
                
            <div className="container p-3">
            
                {
                    routeNo !== 0 ?
                    
                        <table className="table table-striped"  >
                          
                        
                            <thead>
                            
                              <tr>
                              <th><strong>ID</strong></th>
                                <th> <strong>Route No</strong></th>
                                <th><strong>Start</strong></th>
                                <th><strong>End</strong></th>
                                <th><strong>Price</strong></th>
                               
                                <th><strong>Action</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                              
                                {
                                    //same as const
                                    busRoutes?.map((data, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{data.routeNo}</td>
                                            <td>{data.start}</td>
                                            <td>{data.end}</td>
                                            <td>{data.price}</td>
                                         
                                        <td>
                                            {/* <button  className="btn btn-warning">Sub</button> */}
                                            <Button  className="btn btn-warning mx-1" variant="danger" onClick={() => DeleteRoute(data.routeNo)}>Remove</Button>
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
export default BusRouteTable;
                       

    
                                 

                                
                                





                             
                        

