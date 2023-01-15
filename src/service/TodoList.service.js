class TodoListService {
    todoList = {title:'Programmieren lernen', todos:[
            {text:'IDE installieren',done:true},
            {text:'Node installieren',done:true},
            {text:'Start Quellcode kopieren',done:true},
            {text:'Erste Komponente einbinden',done:true},
            {text:'Komponente ändern',done:true},
            {text:'Arbeiten mit state',done:true},
            {text:'Arbeiten mit service',done:true},
            {text:'Kommunikation mit Properties',done:false}
        ]
    };

    getTodoList() {
        return this.todoList;
    }
}

export default new TodoListService();