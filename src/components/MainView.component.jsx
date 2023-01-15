import { Component } from "react";
import TodoList from "./TodoList.component";
import TodoListEdit from "./TodoListEdit.component";

class MainView extends Component {
    VIEWS = {DISPLAY:1, EDIT:2}
    constructor() {
        super();

        this.state = {
            currentView:this.VIEWS.DISPLAY
        }
    }

    renderButtons = () => {
        if (this.state.currentView === this.VIEWS.DISPLAY) {
            return <button 
                        onClick={()=>this.setState({currentView:this.VIEWS.EDIT})} 
                        className="button is-info">
                        Bearbeiten
                    </button>
        }
    }
    render = () => {
        let view = <TodoList/>;
        if(this.state.currentView === this.VIEWS.DISPLAY) {
            view = <TodoList/>
        } else {
            view = <TodoListEdit showListView={()=>this.setState({currentView:this.VIEWS.DISPLAY})}/>
        }
        return (
            <div>
                {view}
                {this.renderButtons()}
            </div>

        )
    }
}

export default MainView;