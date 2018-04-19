import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import HomePage from '../components/HomePage';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={HomePage} exact ={true}/>
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch>
    </div> 
    </BrowserRouter>
);

export default AppRouter;
