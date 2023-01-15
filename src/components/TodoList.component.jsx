import { Component } from "react";
import TodoListService from "../service/TodoList.service";
import './TodoList.component.css';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            todos: []
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

    resolveTodo = (index) => {
        console.log(index);
        TodoListService.setTodoDone(index);
        this.init();
    }

    render() {
        return (
            <div className="box">
                <h2>{this.state.title}</h2>
                <table className="is-striped">
                    <tbody>
                    {this.state.todos.map((todo,idx)=>{
                        //console.log('todo: '+todo.text+' done: '+todo.done);
                        return todo.done ? 
                            <tr key={idx} className="done"><td>{todo.text}</td><td>&#9989;</td></tr> :
                            <tr key={idx} ><td>{todo.text}</td><td><button onClick={() => this.resolveTodo(idx)} className="button is-info">erledigt</button></td></tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList;