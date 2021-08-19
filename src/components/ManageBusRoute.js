import Slider from "./Silder";
import { Button } from 'react-bootstrap';
import {  useState} from "react";
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';



function ManageBusRoute() {
  //to take the state for the create
  
  const [routeNo, setRouteNo] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [price, setPrice] = useState("");
   //to catch the data got from backend
  const [route, setRoute] = useState({
    routeNo: " ",
    start: " ",
    end: " ",
    price: " ",
  });

  
//create fuction
  const CreateRoute = async () => {

    console.log(routeNo, start, end, price);

    await fetch('http://localhost:8012/basic/web/index.php?r=busroute/create', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
        routeNo: routeNo,
        start: start,
        end: end,
        price: price,

      })
    })

    .then((response) => response.json())
    .then((response)=>{
      console.log(response);
     if (response.success==true){
      toast.success("You have sucessfully registered a new bus route")
      
       }else
       toast.error("Registration Denied")
       
      });

  }
//update function
  const UpdateRoute = async () => {

    console.log(routeNo, start, end, price);

    await fetch(`http://localhost:8012/basic/web/index.php?r=busroute/update&id=${routeNo}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
        routeNo: route.routeNo,
        start: route.start,
        end: route.end,
        price: route.price,

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
  const DeleteRoute = async () => {

    console.log(routeNo);

    await fetch(`http://localhost:8012/basic/web/index.php?r=busroute/delete&routeNo=${routeNo}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify({
        routeNo: routeNo,
        start: start,
        end: end,
        price: price,

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

  const SearchRoute = async () => {

    console.log(routeNo, start, end, price);

    const response = await fetch(`http://localhost:8012/basic/web/index.php?r=busroute/search&rno=${routeNo}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setRoute({
          ...route,
          routeNo: responseJson.routeNo,
          start: responseJson.start,
          end: responseJson.end,
          price: responseJson.price,
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
                <h2>Manage Bus Routes</h2>
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
                    Add Bus Route
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
                    Alter Bus Route
                  </a>
                </li>
              </ul>
            </div>


            {/*Add Bus Route form */}

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
                          name="routeNo"
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
                      <label>Start</label>
                      <div className="input-group mb-3">
                      <input
                          type="text"
                          name="start"
                          className="form-control"
                          placeholder="Enter Start"
                          autocomplete="off" 
                          onChange={(e) => setStart(e.target.value)}
                          required

                          

                        />

                        {/* <Dropdown
                          // placeholder='Select Starting Location'
                          className="form-control"
                          fluid
                          selection
                          options={location} 
                        >
                          <Dropdown.Toggle variant="success" id="dropdown-basic" title=" Select Starting Location">
                         
                           </Dropdown.Toggle>
                          </Dropdown> */}

          
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-calendar"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>End</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="end"
                          className="form-control"
                          placeholder="Enter End"
                          autocomplete="off" 
                          onChange={(e) => setEnd(e.target.value)}
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
                      <label>Price</label>
                      <div className="input-group mb-3">
                        <input
                          type="number"
                          name="price"
                          className="form-control"
                          placeholder="Enter Ticket Price"
                          autocomplete="off" 
                          onChange={(e) => setPrice(e.target.value)}
                          required
                        />
                        {<div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-calendar"></span>
                          </div>
                        </div>}
                      </div>
                    </div>

                    <div className="form-group">
                    <Button type="submit" onClick={CreateRoute} type="Button" variant="primary" >Add</Button> 
                    <Toaster />                 
                    </div>
                  </form>
                </div>

                {/*Alter Bus Route form */}

                <div
                  className="tab-pane fade"
                  id="pills-register"
                  role="tabpanel"
                  aria-labelledby="pills-register-tab"
                >
                  {/* <form method="post"> */}
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
                    <label>Start</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" Enter Start"
                        onChange={(e) => setRoute({
                          ...route,
                          start: e.target.value
                        })}
                        value={route.start}
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
                    <label>End</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter End"
                        onChange={(e) => setRoute({
                          ...route,
                          end: e.target.value
                        })}
                        value={route.end}
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
                    <label>Price</label>
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="Enter Ticket Price"
                        onChange={(e) => setRoute({
                          ...route,
                          price: e.target.value
                        })}
                        value={route.price}
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
                    <div className="row">

                    <div className="col-md-6" size="sm" class="btn btn-space">
                        <Button type="submit" onClick={SearchRoute} type="button" variant="info" >Search</Button>
                        
      
                      </div>

                      <div className="col-md-6" class="btn btn-space" >
                        <Button type="submit" onClick={UpdateRoute}  type="button" variant="success"  >Update    </Button>
                        <Toaster /> 
                      </div>

                      
                      <div className="col-md-6" size="sm" class="btn btn-space">
                      <Button type="reset" onClick={refreshPage} type="button" variant="warning" style = {{color:"white"}} >Reset</Button>
                      
                      </div>               


                      <div className="col-md-6" size="sm" class="btn btn-space">
                        <Button type="submit" onClick={DeleteRoute} type="button" variant="danger"  >Delete</Button>
                        <Toaster /> 
                      </div>

                      

                    </div>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   

      
    </div>



  );
}





export default ManageBusRoute;
