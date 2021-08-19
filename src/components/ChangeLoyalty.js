import Slider from "./Silder";
import { useState,useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from 'react-bootstrap';
import { Navigation } from "@material-ui/icons";
import {useHistory } from "react-router-dom";
import InputSpinner from 'react-bootstrap-input-spinner'  ;
import Footer from "./Footer";
import React from 'react';

function ChangeLoyalty() {
  //to take the state for the create
    
    const [loyaltyvalue, setloyaltyvalue] = useState("");
    

    
      //update function
    
    const UpdatePassword = async () => {
     

    console.log( loyaltyvalue); 

  
      await fetch(`
      http://localhost:8012/basic/web/index.php?r=config/change-rate`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.  
  
        body: JSON.stringify({
            loyaltyvalue:loyaltyvalue,
  
        })
      })
      .then((response) => response.json())
    .then((response)=>{
      console.log(response);
     if (response.success==true){
      toast.success("Successfully updated ")           
  }
  else{toast.error(response.error)}

})

  .catch((error) => {
    console.error(error);
  });
};

      
      
    
  
  return (
    <div >
      <Slider />
      <div className="p-3 mb-2 bg-info.bg-gradient">
        <section className="content-header">
          <div className="container-fluid">

            <div className="row mt-9 justify-content-center">
              <div className="col-md-5 mt-5">
                <div className="col-md-16 mt-5">
                  <div className="mt-5">
                    <div className="text-center">
                      <h2><b>Change Loyalty Rate</b></h2>
                    </div>
                    <div className="card-body">
                      <form method="post">
                        

                      <div className="form-group">
                          <label>Loyalty Rate</label>
                          <div className="input-group mb-3">
                            
                          <InputSpinner
                            type={'real'}
                            precision={2}
                            max={50}
                            min={0}
                            step={1}
                            value={loyaltyvalue}
                            onChange={(loyaltyvalue)=>setloyaltyvalue(loyaltyvalue)}
                            variant={'primary'}
                            size="sm"
                                />
                            
                          </div>
                        </div>


                        
                        <div className="form-group">
                          <div className="col-md-6" size="sm">
                            <Button type="submit" type="button" onClick={UpdatePassword} variant="primary">Confirm </Button>
                            <Toaster /> 
                        
                          </div>

                          <div>



                            {/* <button
                              className="btn text-light mr-3"
                              style={{ backgroundColor: "Blue", marginTop: -60, marginLeft: 390 }}
                              type="reset"
                            >
                              Reset
                            </button> */}

                          </div>


                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     
      <Footer/>

    </div>
  );
}


export default ChangeLoyalty;
