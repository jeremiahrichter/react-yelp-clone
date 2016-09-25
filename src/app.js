import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';

require('./app.styl');

const App = React.createClass({
    render: () =>
        <div>
            <i className="fa fa-star" />
            text text text
        </div>
});

const rootNode = document.querySelector('#root');
ReactDOM.render(<App/>, rootNode);