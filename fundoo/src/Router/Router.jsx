import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from '../pages/signin/signin';
import Signup from '../pages/signup/signup';
import Dashboard from '../pages/Dashboard/Dashboard';



function RouterComponent() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />          
        </Routes>
      </Router>

    </div>
  )
}

export default RouterComponent