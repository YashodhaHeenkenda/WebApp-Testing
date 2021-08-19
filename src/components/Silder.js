import { Link } from "react-router-dom";
import bus from "../images/Buzzbuslogo.png";
import Clock from "./Clock";
import "admin-lte/dist/css/adminlte.css"
import React from 'react';
//clock
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); 
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

function Slider() {

  const Logout = () =>{
    localStorage.clear()
  }
  
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i class="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link">About</a>
          </li> */}
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" role="button">
              <Clock />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" role="button">
              {today}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" role="button" onClick={Logout} href="/Login">
              Logout <i className="fas fa-power-off mr-2"></i>
            </a>
          </li>
        </ul>
      </nav>

      <aside
        className="main-sidebar main-sidebar-custom sidebar-dark-primary elevation-4 "
        position="scroll"
        style={{ backgroundColor: "#000080", position: 'fixed', left: 0 }}
       
        
      >
        {/*Above on sidebar */}
        <Link to="/Dashboard" className="brand-link">
          <img
            src={bus}
            alt="Logo"
            className="brand-image bg-light img-circle elevation-3" 
           
          />
          <span className="brand-text text-light font-weight-light ml-1">
           Home
          </span>
        </Link>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
             
            >
{/*sidebar components */}
              <li className="nav-item">
                <Link to="/Profile" className="nav-link">
                  <i className="fa fa-user nav-icon text-light"></i>
                  <p className="text-light"> Profile</p>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/ManageTimeTable" className="nav-link">
                  <i className="fa fa-clock nav-icon text-light"></i>
                  <p className="text-light"> Manage Time Tables</p>
                </Link>
              </li> */}
             
              {/* <li className="nav-item">
                <Link to="/ManageBusRoute" className="nav-link">
                  <i className="fa fa-bus nav-icon text-light"></i>
                  <p className="text-light"> Manage Bus Routes</p>
                </Link>
              </li> */}
               <li className="nav-item">
                <Link to="/UserTable" className="nav-link">
                  <i className="fa fa-user nav-icon text-light"></i>
                  <p className="text-light">Manage User Accounts</p>
                </Link>
              </li>
            

              <li className="nav-item">
                <Link to="/BusRouteTable" className="nav-link">
                  <i className="fa fa-bus nav-icon text-light"></i>
                  <p className="text-light"> Manage Bus Routes</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/BusTable" className="nav-link">
                  <i className="fa fa-bus nav-icon text-light"></i>
                  <p className="text-light">Manage Bus Details</p>
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link to="/Registration" className="nav-link">
                  <i className="fa fa-plus nav-icon text-light"></i>
                  <p className="text-light">Manage User Accounts</p>
                </Link>
              </li> */}

             

              {/* <li className="nav-item">
                <Link to="/AddBus" className="nav-link">
                  <i className="fa fa-bus nav-icon text-light"></i>
                  <p className="text-light">Manage Bus Details</p>
                </Link>
              </li> */}

              
              <li className="nav-item">
                <Link to="/TimeTableTable" className="nav-link">
                  <i className="fa fa-clock nav-icon text-light"></i>
                  <p className="text-light"> Manage Time Tables</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/ChangeLoyalty" className="nav-link">
                  <i className="fa fa-dollar-sign nav-icon text-light"></i>
                  <p className="text-light"> Change Loyalty Points</p>
                </Link>
              </li>


              <li className="nav-item">
                <Link to="/MapView" className="nav-link">
                  <i className="fa fa-map-marker nav-icon text-light"></i>
                  <p className="text-light"> View Map</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/ChatView" className="nav-link">
                  <i className="fa fa-comments nav-icon text-light"></i>
                  <p className="text-light"> Chat</p>
                </Link>
              </li>

             

              
            </ul>
          </nav>

         

        </div>

        
        
      </aside>
    </div>
  );
}
export default Slider;
