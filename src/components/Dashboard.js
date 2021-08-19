import Slider from "./Silder";
import logo from "../images/homepage.png";
import Footer from "./Footer";
import React from 'react';
// import Cal from "./Cal";





//When click Home

function Dashboard() {
  return (
    //to hold and manage some state and inject it in its render functions
    <div class="wrapper">
     
      <Slider />

     

      <div class="content-wrapper">
        <section className="content-header">
          
          <div className="container-fluid mt-3">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h2><b>Welcome Back!</b></h2>
                
                <img
                  src={logo}
                  height="500"
                  // width="400"
                  alt="Logo"
                  className="rounded float-right"
                />
              </div>
            </div>

            
          </div>

          {/* <div className="container-fluid mt-10">
            <div className="container-fluid mt-10">
              <div class="container-fluid mt-10">
               <Cal
               />
              </div>
            </div>

            
          </div> */}



          
        </section>
      </div>
     
     <Footer/>



    </div>
  );
}

export default Dashboard;
