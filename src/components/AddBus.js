import Slider from "./Silder";
import { Button } from 'react-bootstrap';
import { useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';



function AddBus() {

  const [busNo, setBusNo] = useState("");
  const [noOfSeats, setNoOfSeats] = useState("");
  const [type, setType] = useState("");
  const [routeNo, setRouteNo] = useState("");
  const [oid, setOwnerid] = useState("");
  const [cid, setConductorid] = useState("");
  const [bus, setBus] = useState({
    busNo: " ",
    noOfSeats: " ",
    type: " ",
    routeNo: " ",
    oid: " ",
    cid: " ",   
  });
  

  const CreateBus = async () => {

    console.log(busNo, noOfSeats, type, routeNo,oid,cid );

    const response = await fetch('http://localhost:8012/basic/web/index.php?r=bus/create', {
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
      toast.success("You have sucessfully registered a new bus")
      
       }else
       toast.error("Registration Denied")
       
      });
  }

  const UpdateBus = async () => {

    console.log(busNo, noOfSeats, type, routeNo,oid,cid );

    const response = await fetch(`http://localhost:8012/basic/web/index.php?r=bus/update&busNo=${busNo}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.

    
          body: JSON.stringify({
            busNo: bus.busNo,
            noOfSeats:bus.noOfSeats,
            type:bus.type,
            routeNo: bus.routeNo,
            oid:bus.oid,
            cid:bus.cid,
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

  const DeleteBus = async () => {

    console.log(busNo, noOfSeats, type, routeNo,oid,cid );

    const response = await fetch(`http://localhost:8012/basic/web/index.php?r=bus/delete&busNo=${busNo}`, {
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

  const SearchBus = async () => {

    console.log(busNo, noOfSeats, type, routeNo,oid,cid );


    const response = await fetch(`http://localhost:8012/basic/web/index.php?r=bus/search&busNo=${busNo}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setBus({
          ...bus,
          busNo: responseJson.busNo,
          noOfSeats: responseJson.noOfSeats,
          type: responseJson.type,
          routeNo: responseJson.routeNo,
          oid: responseJson.ownerId,
          cid: responseJson.conductorId,
          
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
                <h2>Manage Bus Details</h2>
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
                    Add Bus Details
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
                    Alter Bus Details
                  </a>
                </li>
              </ul>
            </div>
{/* Add bus details form */}
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
                      <label>Bus No</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Number"
                          autocomplete="off" 
                          required
                          onChange={(e) => setBusNo(e.target.value)}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>No of Seats</label>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Number of Seats"
                          autocomplete="off" 
                          required
                          onChange={(e) => setNoOfSeats(e.target.value)}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Type</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Type"
                          autocomplete="off" 
                          required
                          onChange={(e) => setType(e.target.value)}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Route No</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Route Number"
                          autocomplete="off" 
                          required
                          onChange={(e) => setRouteNo(e.target.value)}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Bus Owner NIC</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Owner NIC"
                          autocomplete="off" 
                          required
                          maxLength="10"
                          onChange={(e) => setOwnerid(e.target.value)}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Bus Conductor NIC</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Conductor NIC"
                          autocomplete="off" 
                          required
                          maxLength="10"
                          onChange={(e) => setConductorid(e.target.value)}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6" size="sm">
                    <Button type="submit" onClick={CreateBus} type="Button" variant="primary" >Add</Button> 
                    <Toaster />
                     </div>
                  </form>
                </div>
{/* alter bus details form */}
                <div
                  className="tab-pane fade"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="pills-register-tab"
                >
                  <form method="post">
                    <div className="form-group">
                      <label>Bus No</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Number"
                          onChange={(e) => setBusNo(e.target.value)}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>No of Seats</label>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Number of Seats"
                          onChange={(e) => setBus({
                            ...bus,
                            noOfSeats: e.target.value
                          })}
                          value={bus.noOfSeats}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Type</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Type"
                          onChange={(e) => setBus({
                            ...bus,
                            type: e.target.value
                          })}
                          value={bus.type}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Route No</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Route Number"
                          onChange={(e) => setBus({
                            ...bus,
                            routeNo: e.target.value
                          })}
                          value={bus.routeNo}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Bus Owner NIC</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Owner NIC"
                          onChange={(e) => setBus({
                            ...bus,
                            oid: e.target.value
                          })}
                          value={bus.oid}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Bus Conductor NIC</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Bus Conductor NIC"
                          onChange={(e) => setBus({
                            ...bus,
                            cid: e.target.value
                          })}
                          value={bus.cid}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-bus"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6" size="sm" class="btn btn-space">
                        <Button type="submit" onClick={SearchBus} type="button" variant="info">Search</Button>
                      </div>


                      <div className="col-md-6" class="btn btn-space">
                        <Button type="submit" onClick={UpdateBus} type="button" variant="success">Update</Button>
                        <Toaster /> 
                        
                      </div>

                      <div className="col-md-6" size="sm" class="btn btn-space">
                      <Button type="reset" onClick={refreshPage} type="button" variant="warning" style = {{color:"white"}} >Reset</Button>
                      </div>

                      <div className="col-md-6" size="sm" class="btn btn-space">
                        <Button type="submit" onClick={DeleteBus} type="button" variant="danger"  >Delete</Button>
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

export default AddBus;
