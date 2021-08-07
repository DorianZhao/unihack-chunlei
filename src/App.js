import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import FdPage from './pages/fundraisers-page/fdpage.component';
import ReportPage from './pages/facts-reports-page/reportpage.component';

function App() {
  return (
    <div>
      <Route exact path = '/' component = {HomePage} />
      <Route exact path = '/fundraisers' component = {FdPage} />
      <Route exact path = '/reportpage' component = {ReportPage} />
    </div>
    );
  
}

export default App;
