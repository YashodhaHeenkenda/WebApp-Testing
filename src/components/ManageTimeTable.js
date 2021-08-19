import Slider from "./Silder";
import { useState,useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from 'react-bootstrap';
import React from 'react';
import moment from 'moment';


function ManageTimeTable() {
  //to take the state for the create
  const [date, setDate] = useState("");
  const [routeNo, setRouteNo] = useState("");
  const [busNo, setBusNo] = useState("");
   //to catch the data got from backend
  const [timetable, setTimetable] = useState({
    date: " ",
    start: " ",
    end: " ",
    routeNo: " ",
    busNo:" ",
    tid:" ",       
  }); 
  
  const [user,setUser] = useState({
    id:" ",
  });
// fetched
  useEffect(() => {
  const   fetchData = async () => {
      
  try {
    //Getting admin id from local storage
    const val= localStorage.getItem('@user');
    const result= JSON.parse(val)
      console.log(result);
      setUser({
       ...user,
       id:result.id,
    })
  } catch(e) {
    // error reading value
  }
  console.log(user.id)
    };
    fetchData();
  },[]);

//create function
  const CreateTimetable = async () => {

    //console.log(date,routeNo,busNo,updatedBy );

    await fetch('http://localhost:8012/basic/web/index.php?r=timetable/create', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
        date: date,
        routeNo: routeNo,
        busNo:busNo,
        id:user.id,
       
      })

    })
    .then((response) => response.json())
    .then((response)=>{
      ///Aaconsole.log(response);
     if (response.success==true){
      toast.success("You have sucessfully registered a new time table")
      
       }else
       toast.error("Registration Denied")
       
      });


  }

//update function
  const UpdateTimetable = async () => {

    //console.log(date,routeNo,busNo,updatedBy );

    await fetch(`http://localhost:8012/basic/web/index.php?r=timetable/update&tid=${timetable.tid}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    
      body: JSON.stringify({
        date:timetable.date,
        routeNo: routeNo,
        busNo:timetable.busNo,
        id:user.id,
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
  const DeleteTimetable = async () => {

    console.log(date,routeNo,busNo );

    await fetch(`http://localhost:8012/basic/web/index.php?r=timetable/delete&routeNo=${routeNo}&date=${date}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
        date: date,
        routeNo: routeNo,
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
//search function
  const SearchTimetable = async () => {

 console.log(date,routeNo,busNo );

    const response = await fetch(`http://localhost:8012/basic/web/index.php?r=timetable/search&routeNo=${routeNo}&date=${timetable.date}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
  })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setTimetable({
          ...timetable,
          //date: responseJson.date,
          start: responseJson.start,
          end: responseJson.end,
          routeNo: responseJson.routeNo,
          busNo: responseJson.busNo,
          updatedBy: responseJson.fullName,
          tid: responseJson.tid,
                   
        });
        setDate({
          date: responseJson.date
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
      <Slider />

      <div className="container justify-content-center mt-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card-header border-bottom-0 bg-transparent">
              <div className="mt-4 text-center">
                <h2>Manage Time Table</h2>
                
                
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
                    Add New Time Table
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
                    Alter Time Table
                  </a>
                </li>
              </ul>
            </div>

            {/*Add New Time Table form */}

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
                      <label>Route No</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Route Number"
                          autocomplete="off" 
                          onChange={(e) => setRouteNo(e.target.value)}
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-sort"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Bus No</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Number"
                          autocomplete="off" 
                          onChange={(e) => setBusNo(e.target.value)}
                          required
                        />


                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-sort"></span>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Date</label>
                      <div className="input-group mb-3">
                        <input type="datetime-local"   min={new Date().toISOString().substring(0,16)}  className="form-control" onSelect={(e) => setDate(e.target.value)} required/>
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-calendar"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                    <Button type="submit" onClick={CreateTimetable} type="Button" variant="primary" >Add</Button>
                    <Toaster /> 
                    </div>
                  </form>
                </div>

                 {/*Alter Time Table form */}

                <div
                  className="tab-pane fade"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="pills-register-tab"
                >
                  <form method="post">
                    <div className="form-group">
                      <label>Route No</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Route Number"
                          onChange={(e) => setRouteNo(e.target.value)}
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-sort"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Date</label>
                      <div className="input-group mb-3">
                        <input type="datetime-local" className="form-control" min={new Date().toISOString().substring(0,16)}
                        //onSelect={(e) => setDate(e.target.value)} 
                         onChange={(e) => setTimetable({
                          ...timetable,
                          date: e.target.value
                        })}
                        value={timetable.date}
                        required
                         />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-calendar"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Bus No</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Route Number"
                          onChange={(e) => setTimetable({
                            ...timetable,
                            busNo: e.target.value
                          })}
                          value={timetable.busNo}
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-sort"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Arrival</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Arrival"
                          // onChange={(e) => setTimetable({
                          //   ...timetable,
                          //   start: e.target.value
                          // })}
                          value={timetable.start}
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-clock"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Departure</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Departure"
                          // onChange={(e) => setTimetable({
                          //   ...timetable,
                          //   end: e.target.value
                          // })}
                          value={timetable.end}
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-clock"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Updated BY</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Departure"
                          // onChange={(e) => setTimetable({
                          //   ...timetable,
                          //   updatedBy: e.target.value
                          // })}
                          value={timetable.updatedBy}
                          required
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-clock"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6" size="sm" class="btn btn-space">
                        <Button type="submit" onClick={SearchTimetable} type="button" variant="info">Search</Button>
                      </div>


                      <div className="col-md-6" class="btn btn-space">
                        <Button type="submit" onClick={UpdateTimetable} type="button" variant="success">Update</Button>
                        <Toaster /> 
                        
                      </div>

                      <div className="col-md-6" size="sm" class="btn btn-space">
                      <Button type="reset" onClick={refreshPage} type="button" variant="warning" style = {{color:"white"}} >Reset</Button>
                      </div>

                      <div className="col-md-6" size="sm" class="btn btn-space">
                        <Button type="submit" onClick={DeleteTimetable} type="button" variant="danger"  >Delete</Button>
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

export default ManageTimeTable;
