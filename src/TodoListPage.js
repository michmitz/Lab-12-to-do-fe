import React, { Component } from 'react'
import './App.css'
import { fetchTodos } from './todos-api.js'

export default class TodoListPage extends Component {
    state = {
        todos: [],
        todo: '',
        completed: false 
      }

    componentDidMount = async () => {
        if (!this.props.token) {
          this.props.history.push('/login');
        } else {
          const data = await fetchTodos(this.props.token)
      
          this.setState({
            todos: data.body
          })
        }
    }

    
    
    render() {
        return (
        <div className="App">
            <section className="general-divider">
            <h2>Todos:</h2>
            {
                this.state.todos.map((todo) => {
                return <>
                    <div>Task: {todo.todo}</div>
                    <div>Completed: {todo.completed}</div>
                </>
                })
            }
            </section>
            </div>
        )
}
}
