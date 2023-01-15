class TodoListService {
    todoList = {title:'Programmieren lernen', todos:[
            {text:'IDE installieren',done:true},
            {text:'Node installieren',done:true},
            {text:'Start Quellcode kopieren',done:false},
            {text:'Erste Komponente einbinden',done:false},
            {text:'Komponente ändern',done:false},
            {text:'Arbeiten mit state',done:false},
            {text:'Arbeiten mit service',done:false},
            {text:'Kommunikation mit Properties',done:false}
        ]
    };

    getTodoList() {
        return this.todoList;
    }

    setTodoDone(index) {
        this.todoList.todos[index].done=true;
    }

    saveTodoList(todoList) {
        this.todoList = todoList;
    }
}

export default new TodoListService();