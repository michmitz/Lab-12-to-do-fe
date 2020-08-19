import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
} from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage.js';
import TodoListPage from './TodoListPage.js';
import HomePage from './HomePage.js';


export default class App extends Component {
  state = {
    token: localStorage.getItem('token')
}

handleToken = (token) => {
  this.setState({ token: token })

  localStorage.setItem('token', token)
}

    render() {
        return (
            <div className="App">
                <Router>
                  <main>

                  <div className="sidebar">
                        {
                            this.state.token &&
                            <>
                            <Link to='/'>Home - Maybe delete this</Link>
                            <Link to='/list'>List</Link>
                            <Link to='/login'>Login</Link>
                            </>
                        }
                  </div>
                  
                  <div className="content">
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <AuthPage handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                        />
                        <Route 
                          path="/list" 
                          exact
                          render={(routerProps) => <TodoListPage handleToken={this.handleToken} token={this.state.token} {...routerProps} />} 
                        />
                    </Switch>
                    </div>

                    </main>
                </Router>
            </div>
        )
    }
}

