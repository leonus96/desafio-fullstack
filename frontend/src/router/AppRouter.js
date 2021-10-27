import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { Header } from '../components/ui/Header';

import CustomerList from '../components/views/CustomerList';
import CustomerNew from '../components/views/CustomerNew';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <CustomerList />
                    </Route>
                    <Route exact path="/new">
                        <CustomerNew />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
