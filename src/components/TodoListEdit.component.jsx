import { Component } from "react";
import TodoListService from "../service/TodoList.service";

class TodoListEdit extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            todos: [],
            newTodo: ''
        }
    }
    componentDidMount = () => {
        this.init();
    }

    init = () => {
        var todoList = TodoListService.getTodoList();
        this.setState(todoList);
        //console.log('todoList: ' + todoList.title);
    }

    setTitle = (title) => {
        this.setState({ title });
    }

    editTodo = (index, text) => {
        let todos = this.state.todos;
        todos[index].text = text;
        this.setState(todos);
    }

    setNewTodo = (text) => {
        this.setState({ newTodo: text });
    }

    addNewTodo = () => {
        let todo = { text: this.state.newTodo, done: false };
        let todos = this.state.todos;
        let newTodo = '';

        todos.push(todo);

        this.setState({ todos, newTodo });
    }

    switchState = (index) => {
        let todos = this.state.todos;
        todos[index].done = !todos[index].done;

        this.setState({todos});
    }

    deleteTodo = (index) => {
        let todos = this.state.todos;
        todos.splice(index,1);

        this.setState({todos});
    }

    saveTodoList = () => {
        let todoList = {
            title:this.state.title,
            todos:this.state.todos
        }
        TodoListService.saveTodoList(todoList);
    }

    render = () => {
        return (
            <div>
                <h2>Todo List Bearbeiten</h2>
                <div className="field">
                    <label className="label">Listen Titel</label>
                    <div class="control">
                        <input className="input" type="text" placeholder="Titel"
                            value={this.state.title}
                            onChange={e => this.setTitle(e.target.value)} />
                    </div>
                </div>
                
                    <label className="label">Todos</label>
                    {this.state.todos.map((todo, idx) => {
                        return<div key={idx} className="field has-addons">
                            <div className="control is-expanded">
                                <input className="input" type="text" placeholder="Titel"
                                    value={todo.text}
                                    onChange={e => this.editTodo(idx, e.target.value)} />
                            </div>
                            <div className="control">
                                <button className={todo.done ? 'button is-success' : 'button is-secondary'}
                                    onClick={()=>this.switchState(idx)}>&#10004;</button>
                            </div>
                            <div className="control">
                                <button className={!todo.done ? 'button is-success' : 'button is-secondary'}
                                    onClick={()=>this.switchState(idx)}>&#9744;</button>
                            </div>
                            <div className="control">
                                <button className="button has-background-danger-light"
                                    onClick={()=>this.deleteTodo(idx)}>&#10008;</button>
                            </div>
                        </div>
                    })}
                
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input type="text" className="input" placeholder="Neues Todo"
                            value={this.state.newTodo}
                            onChange={e => this.setNewTodo(e.target.value)}></input>
                    </div>
                    <div className="control">
                        <button className="button is-info"
                            onClick={this.addNewTodo}>&#10010;</button>
                    </div>
                </div>
                <button className="button is-info" onClick={this.saveTodoList}>Speichern</button>
            </div>
        )
    }
}

export default TodoListEdit;