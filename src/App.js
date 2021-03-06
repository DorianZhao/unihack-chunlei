import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import FdPage from './pages/fundraisers-page/fdpage.component';
import ReportPage from './pages/facts-reports-page/reportpage.component';
import FeedPage from './pages/private-feed-page/feedpage.component';
import LoginPage from './pages/login-page/loginpage.components';
import FundedPage from './pages/priv-funded-page/funded-page.component';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export { history };

export default class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                  <Route exact path = '/' component = {HomePage} />
                  <Route exact path = '/fundraisers' component = {FdPage} />
                  <Route exact path = '/reportpage' component = {ReportPage} />
                  <Route exact path = '/feed' component = {FeedPage} />
                  <Route exact path = '/login' component = {LoginPage} />
                  <Route exact path = '/fundedChildren' component = {FundedPage} />
        </Switch>
    </Router>
  )
}
}
