var listElement  = document.querySelector('#app ul');
var inputElment  = document.querySelector('#app input');
var buttonElment = document.querySelector('#app button');

var todos = [
    'Fazer tarefas 01',
    'Estuadr JS',
    'Participar da comunidade JS'
];

function renderTodos(){
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();