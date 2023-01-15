import { Component } from "react";
import './TodoList.component.css';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            title:'Programmieren lernen',
            todos:[
                {text:'IDE installieren',done:true},
                {text:'Node installieren',done:true},
                {text:'Start Quellcode kopieren',done:true},
                {text:'Erste Komponente einbinden',done:true},
                {text:'Komponente ändern',done:false},
                {text:'Arbeiten mit state',done:false},
                {text:'Arbeiten mit service',done:false},
                {text:'Kommunikation mit Properties',done:false},
            ]
        }
    }
    
    render() {
        return (
            <div className="box">
                <h2>{this.state.title}</h2>
                <table className="is-striped">
                    <tbody>
                    {this.state.todos.map((todo)=>{
                        console.log('todo: '+todo.text+' done: '+todo.done);
                        return todo.done ? 
                            <tr className="done"><td>{todo.text}</td><td>&#9989;</td></tr> :
                            <tr><td>{todo.text}</td><td><button className="button is-info">erledigt</button></td></tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList;