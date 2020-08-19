import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                Welcome to your ToDo list! Click the link to log in.
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}
