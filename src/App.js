import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import FdPage from './pages/fundraisers-page/fdpage.component';
import ReportPage from './pages/facts-reports-page/reportpage.component';
import FeedPage from './pages/private-feed-page/feedpage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch> 
        <Route exact path = '/' component = {HomePage} />
        <Route exact path = '/fundraisers' component = {FdPage} />
        <Route exact path = '/reportpage' component = {ReportPage} />
        <Route exact path = '/feed' component = {FeedPage} />
      </Switch>
    </div>
    );
  
}

export default App;
