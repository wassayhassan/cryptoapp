import './App.css';
import React from 'react';
import DashBoard from './pages/dashboard.page';

import {Routes, Route} from 'react-router-dom';

function App() {


  return (
   <div className='app-c'>
   <Routes>
      <Route exact path = "/" element = {<DashBoard />}/>
      <Route exact path = "/trade" element = {<DashBoard />}/>
      <Route exact path = "/wallet" element = {<DashBoard />}/>
      <Route exact path = "/notifications" element = {<DashBoard />}/>
   
   </Routes>
   </div>
 
  );
}

export default App;
