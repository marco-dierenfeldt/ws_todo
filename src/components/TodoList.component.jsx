import { Component } from "react";
//import './TodoList.component.css';

class TodoList extends Component {
    render() {
        return (
            <div className="box">
                <h2>Programmieren lernen</h2>
                <table className="is-striped">
                    <tbody>
                    <tr className="done"><td>IDE installieren</td><td>&#9989;</td></tr>
                    <tr><td>Node installieren</td><td>&#9989;</td></tr>
                    <tr><td>Start Quellcode kopieren</td><td>&#9989;</td></tr>
                    <tr><td>Erste Komponente einbinden</td><td>&#9989;</td></tr>
                    <tr><td>Komponente ändern</td><td><button className="button is-info">erledigt</button></td></tr>
                    <tr><td>Arbeiten mit state</td><td><button className="button is-info">erledigt</button></td></tr>
                    <tr><td>arbeiten mit service</td><td><button className="button is-info">erledigt</button></td></tr>
                    <tr><td>kommunikation mit Properties</td><td><button className="button is-info">erledigt</button></td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList;