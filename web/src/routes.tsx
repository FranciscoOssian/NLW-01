import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import SuccessRegister from './pages/SuccessRegister';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/create-point" />
            <Route component={SuccessRegister} path="/success-register"/>
        </BrowserRouter>
    );
}

export default Routes;