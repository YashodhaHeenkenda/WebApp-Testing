import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import {Login} from'./Login';
import  {Signup} from './Signup'
//login and signup code connecting
export const Routes = () => {
  return (
    
        <div>
          
          <BrowserRouter>
            <Switch>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/Signup">
                <Signup />
              </Route>
            
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
    