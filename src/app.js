import './app.styl';
import App from 'containers/App/App';
import ReactDOM from 'react-dom';
import React from 'react';
import {browserHistory, Router, Route} from 'react-router';

const Home = React.createClass({
    render: function() {
        return (<div>Hello world</div>)
    }
});

const routes = (
    <Router>
        <Route path='/' component={Home} />
    </Router>
);

const rootNode = document.querySelector('#root');
ReactDOM.render(<App history={browserHistory} routes={routes}/>, rootNode);