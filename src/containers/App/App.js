import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import styles from './styles.module.css';

const App = React.createClass({
    render: () =>
        <div className={styles.wrapper}>
            <i className="fa fa-star"/>
            text text text
        </div>
});

module.exports = App;