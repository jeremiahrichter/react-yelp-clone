import React from 'react';
import {Route} from 'react-router';
import makeMainRoutes from './views/Main/routes';

const main = makeMainRoutes();

export const makeRoutes = () => (
    <Route path="">
        {main}
    </Route>
);

export default makeRoutes;