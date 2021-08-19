import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Profile from './components/Profile';

import Dashboard from './components/Dashboard'
import "admin-lte/dist/css/adminlte.css"



import Login from './components/Login';
import ManageTimeTable from './components/ManageTimeTable';
import Registration from './components/Registration';
import ManageBusRoute from './components/ManageBusRoute';
import Homepage from './components/Homepage'
import MapView from './components/MapView';
import ChatView from './components/ChatView';
import EditProfile from './components/EditProfile';
import AddBus from './components/AddBus';
import BusRouteTable from './components/BusRouteTable';
import TimeTableTable from './components/TimeTableTable';
import BusTable from './components/BusTable';
import UserTable from './components/UserTable';
import ChangePassword from './components/ChangePassword';
import ChangeLoyalty from './components/ChangeLoyalty';
import PrivateRoute from './PrivateRoutes';
import Input from './components/input';

function App() {

  return (
    <>
      <Router>
      
        
        <Switch>
        
          <Route path='/' exact component={Homepage} />
          <Route path='/Login' component={Login} />
            
          <Route path='/MapView' component={MapView} />
          <Route path='/Dashboard' component={Dashboard} />
          <Route path='/Registration' component={Registration} />
          <Route path='/ManageTimeTable' component={ManageTimeTable} />
          <Route path='/ManageBusRoute' component={ManageBusRoute} />
          <Route path='/AddBus' component={AddBus} />

          <Route path="/ChatView" component={ChatView} />

          <Route path='/EditProfile' component={EditProfile} />

          <Route path='/BusRouteTable' component={BusRouteTable} />
          <PrivateRoute path='/TimeTableTable' component={TimeTableTable} />
          <Route path='/BusTable' component={BusTable} />
          <Route path='/UserTable' component={UserTable} />
          <Route path='/ChangePassword' component={ChangePassword} />
          <Route path='/ChangeLoyalty' component={ChangeLoyalty} />
        



         
          <PrivateRoute path='/Profile' component={Profile} />
         
          
        </Switch>


        
      </Router>
    </>
  );
}

export default App;

