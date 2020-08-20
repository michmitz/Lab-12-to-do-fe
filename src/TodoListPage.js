import React, { Component } from 'react'
import './App.css'
import { fetchTodos, createTodo, updateTodo } from './todos-api.js'

export default class TodoListPage extends Component {
    state = {
        todos: [],
        todo: ''
      }

    componentDidMount = async () => {
        if (!this.props.token) {
          this.props.history.push('/');
        } else {
          const data = await fetchTodos(this.props.token)
      
          this.setState({
            todos: data.body
          })
        }
    }

    handleCreateSubmit = async (e) => {
        e.preventDefault();

        await createTodo({
            todo: this.state.todo,
            completed: false
        });

        this.setState({
            todo: ''
        })

        const data = await fetchTodos(this.props.token)
        this.setState({
            todos: data.body
          })
    }

    handleToDo = (e) => {
        this.setState({ todo: e.target.value });
    }

    handleComplete = async (id, todo) => {
        await updateTodo(id,
            {
                todo: todo.todo,
                completed: true
            });
            const data = await fetchTodos(this.props.token)

            this.setState({
                todos: data.body
            })
    }


    
    render() {
        return (
        <div className="App">
            <section className="general-divider">

                <div className="create-todo">
                    <h2>Create A Todo!</h2>
                    <form className="create-todo-form" onSubmit={this.handleCreateSubmit}>
                    <label>
                        Todo:
                        <input onChange={this.handleToDo} type="text" value={this.state.todo}/>
                    </label>
                    <button className="make-todo-button">Make Todo</button>
                    </form>
                </div>

                
                <div className="todo-list">
                    <h2>Todos:</h2>
                    {
                        this.state.todos.map((todo) => {
                        if(todo.completed === false) {
                        return <div className="todo-uncompleted">
                                <div>Task: {todo.todo}</div>
                                <div>Complete:</div>
                                <button onClick={() => this.handleComplete(todo.id, todo)}>Mark As Done</button>
                            </div>
                        } else {
                            return <div className="todo-completed">
                                    <div>Task: {todo.todo}</div>
                                    <div>Completed</div>
                                </div>
                        }
                    })
                    }
                </div>

            </section>
            </div>
        )
}
}

