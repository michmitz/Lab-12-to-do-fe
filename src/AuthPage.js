import React, { Component } from 'react'
import './App.css'
import { signUp, signIn } from './todos-api.js'

export default class AuthPage extends Component {
    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await signUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });
        console.log('user', user)

        this.props.handleToken(user.body.token);
        this.props.history.push('/list');
    }

    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await signIn({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        });

        console.log('user', user)
        this.props.handleToken(user.body.token);
        this.props.history.push('/list');
    }

    render() {
        return (
            <div className="login-page">
                <form onSubmit={this.handleSignIn}>
                    Sign In
                    <label>
                        Email
                        <input onChange={e => this.setState({ signInEmail: e.target.value })} value={this.state.signInEmail} placeholder="michelle@cool.com"/>
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="1234" onChange={e => this.setState({ signInPassword: e.target.value })} value={this.state.signInPassword}/>
                    </label>
                    <button>Submit</button>
                </form>
                <form onSubmit={this.handleSignUp}>
                    Sign Up
                    <label>
                        Email
                        <input onChange={e => this.setState({ signUpEmail: e.target.value })} value={this.state.signUpEmail} placeholder="michelle@cool.com"/>
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder="1234" onChange={e => this.setState({ signUpPassword: e.target.value })} value={this.state.signUpPassword}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

