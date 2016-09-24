import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/styles.module.styl'

const App = React.createClass({
    render: () =>
        <div
        className='container'>text text text</div>
});

const rootNode = document.querySelector('#root');
ReactDOM.render(<App/>, rootNode);