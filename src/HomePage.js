import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                Welcome to your Todo list! Click the link to log in.
                <Link className="login-link" to='/login'>Login</Link>
            </div>
        )
    }
}
