import './app.styl';
import App from 'containers/App/App';
import ReactDOM from 'react-dom';
import React from 'react';
import {browserHistory} from 'react-router';
import makeRoutes from './routes';

const routes = makeRoutes();

const rootNode = document.querySelector('#root');

ReactDOM.render(
    <App
        history={browserHistory}
        routes={routes}/>,
    rootNode
);