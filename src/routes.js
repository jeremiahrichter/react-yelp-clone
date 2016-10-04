import React from 'react';
import {Router} from 'react-router';
import makeMainRoutes from './views/Main/routes';

const routes = makeMainRoutes();

export const makeRoutes = () => (
    <Router>
        {routes}
    </Router>
);

export default makeRoutes;