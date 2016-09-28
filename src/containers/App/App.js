import React, {PropTypes} from 'react';
import 'font-awesome/css/font-awesome.css';
import styles from './styles.module.css';
import {Router} from 'react-router';

export default class App extends React.Component {
    static propTypes = {
        routes: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    //class getter
    get content() {
        return (
            <Router
                routes={this.props.routes}
                history={this.props.history}/>
        );
    }

    render() {
        return (
            <div
                style={{height: '100%'}}>
                {this.content}
            </div>
        );
    }
}