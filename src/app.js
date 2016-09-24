import React from 'react';
import ReactDOM from 'react-dom';

require('./app.styl');

const App = React.createClass({
    render: () =>
        <div>text text text</div>
});

const rootNode = document.querySelector('#root');
ReactDOM.render(<App/>, rootNode);