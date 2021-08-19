import Slider from "./Silder";
 import { Button } from 'react-bootstrap';
import { useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
 import { Link, useHistory } from 'react-router-dom';
import React from 'react'

import Footer from "./Footer";




function TimeTableTable() {
  
    //to take the state for the create
    const [tid, setTimeTableID] = useState("");
    const [date, setDate] = useState("");
    const [routeNo, setRouteNo] = useState("");
    const [busNo, setBusNo] = useState("");
     //to catch the data got from backend
    const [timetable, setTimetable] = useState({
        tid:"",
      date: " ",
      start: " ",
      end: " ",
      routeNo: " ",
      busNo:" ",
      id:" ",       
    }); 
    const [user,setUser] = useState({
        id:" ",
      });
  //data according to the DB
    const [busTimeTable,setData] = useState([{tid:"",date:" ",start:" ",end:"" ,routeNo:"",busNo:"" ,id:"" }]);
   
 // fetched
  useEffect(() => {
    

    const fetchData = async () => {
      fetch(
        "http://localhost:8012/basic/web/index.php?r=timetable/list-all",
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
const DeleteTimetable = async (routeNo,date) => {

    console.log(date,routeNo );

    await fetch(`http://localhost:8012/basic/web/index.php?r=timetable/delete&routeNo=${routeNo}&date=${date}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
       
        busNo:busNo,
               
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
                <h2><b>Available Bus Time Tables</b></h2>
              </div>
              
                            <Link to="/ManageTimeTable">  <Button className="form-group" variant="primary"  >Add</Button></Link>
                    <Link to="/ManageTimeTable">  <Button className="form-group" variant="success">Update</Button></Link>
                    
                
            <div className="container p-3">
            
                {
                    tid !== 0 ?
                    
                        <table className="table table-striped"  >
                          
                        
                            <thead>
                            
                              <tr>
                              <th><strong>ID</strong></th>
                             
                               
                                <th> <strong>Date</strong></th>
                                
                                <th> <strong>Route No</strong></th>
                                
                                <th><strong>Bus No</strong></th>
                               
                               
                                <th><strong>Action</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                              
                                {
                                    //same as const
                                    busTimeTable?.map((data, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            
                                            <td>{data.date}</td>
                                            <td>{data.routeNo}</td>
                                            <td>{data.busNo}</td>
                                            
                                        <td>
                                            {/* <button  className="btn btn-warning">Sub</button> */}
                                            <Button  className="btn btn-warning mx-1" variant="danger" onClick={() => DeleteTimetable(data.routeNo,data.date)}>Remove</Button>
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
    export default TimeTableTable;
                       

    
                                 

                                
                                





                             
                        

