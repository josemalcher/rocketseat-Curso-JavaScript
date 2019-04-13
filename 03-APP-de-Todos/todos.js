var listElement  = document.querySelector('#app ul');
var inputElment  = document.querySelector('#app input');
var buttonElment = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
/* 
var todos = [
    'Fazer tarefas 01',
    'Estuadr JS',
    'Participar da comunidade JS'
];
 */

function renderTodos(){
    
    listElement.innerHTML = '' ; 
    
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //excluir
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+pos+')');

        var linkText = document.createTextNode('Excluir');
        
        todoElement.appendChild(todoText);

        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo(){
    var todoText = inputElment.value;

    todos.push(todoText);
    inputElment.value = '';
    renderTodos();
    saveToStorage();
}

buttonElment.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    // JSON
    localStorage.setItem('list_todos', JSON.stringify(todos));
}