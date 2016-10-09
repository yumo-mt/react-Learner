import React from 'react';
import { render } from 'react-dom';
import {Router,Route,hashHistory,Link,IndexRoute,Redirect,browserHistory} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'


import Com1 from './Components/com1';
import Com2 from './Components/com2';
import Com3 from './Components/com3';
import App from './Components/main'


let root = document.getElementById('app');
render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute  component={Com1}/>
            <Route path="/com1" component={Com1} />
            <Route path="/com2" component={Com2} />
            <Route path="/com3" component={Com3} />
        </Route>
    </Router>
    ,root);

