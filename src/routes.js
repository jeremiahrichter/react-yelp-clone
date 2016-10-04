import React from 'react';
import {Router} from 'react-router';
import makeMainRoutes from './views/Main/routes';

const main = makeMainRoutes();

export const makeRoutes = () => (
    <Router>
        {main}
    </Router>
);

export default makeRoutes;