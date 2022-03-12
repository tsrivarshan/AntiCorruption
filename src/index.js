import React from 'react';
import ReactDOM from "react-dom";

import  './index.css'
import  Login from'./App'
import  Project from'./components/project'
import  Home from'./components/home'
import  Inspect from'./components/inspect'
import  Inspectc from'./components/inspectc'
import  Comment from'./components/comment'
import  Contracter from'./components/contracter'
import  Update from'./components/update'
import  DailyReport from'./components/daily_reports'
import  Staff from'./components/staffs'
import  Y from './components/login'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
   
    
    
  
  <Router>
     
    
          <Switch>
            <Route exact path="/">
          < Y/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contracter">
              <Contracter />
            </Route>
            <Route path="/inspect">
              < Inspect/>
            </Route>
            <Route path="/inspectc">
              < Inspectc/>
            </Route>
            <Route path="/comment">
              < Comment/>
            </Route>
            <Route path="/Update">
              < Update/>
            </Route>
            <Route path="/dailyReport">
              < DailyReport/>
            </Route>
            <Route path="/project">
              < Project/>
            </Route>
            <Route path="/staff">
              < Staff/>
            </Route>
            <Route path="/signup">
          <  Login />
            </Route>
     
          </Switch>
        </Router>
   
   , document.getElementById("root"));

 