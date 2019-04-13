# Curso JavaScript

https://station.rocketseat.com.br/courses/starter

Curso Livro da Rocketseat - Diego Fernandes 

## <a name="indice">Índice</a>

1. [Introdução](#parte1)     
2. [Configurando ambiente](#parte2)     
3. [Variáveis e dados](#parte3)     
4. [Operações matemáticas](#parte4)     
5. [Funções](#parte5)     
6. [Condicionais](#parte6)     
7. [Operadores lógicos](#parte7)     
8. [Condição ternária](#parte8)     
9. [Estruturas de repetição](#parte9)     
10. [Intervalo e timeout](#parte10)     
11. [Desafio](#parte11)     
12. [Eventos inline](#parte12)     
13. [Trabalhando com a DOM](#parte13)     
14. [Lidando com elementos](#parte14)     
15. [Alterando estilos](#parte15)     
16. [Desafio](#parte16)     
17. [Estrutura do app](#parte17)     
18. [Iniciando aplicação](#parte18)     
19. [Renderizando todos](#parte19)     
20. [Criando todos](#parte20)     
21. [Excluindo todos](#parte21)     
22. [Salvando no storage](#parte22)     
23. [Requisições AJAX](#parte23)     
24. [Promises](#parte24)     
25. [Utilizando Axios](#parte25)     
26. [Desafio](#parte26)     
---


## <a name="parte1">1 - Introdução</a>



[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - Configurando ambiente</a>



[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Variáveis e dados</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat</title>
</head>
<body>
    <script>
        var nome = "José";
        var idade = 34;
        var peso = 90.3;
        var humano = true;

        var alunos = ['jose','marcos','joão'];
        var aluno = {
            nome: alunos[0],
            idade: 20,
            peso: 80.8,
            humano: true,
        }
        console.log(alunos);
        console.log(alunos[1]);

        console.log(aluno.nome);
        console.log(aluno.peso);
    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Operações matemáticas</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat</title>
</head>
<body>
    
    <script>
        var x = 10, y = 5;

        var resultado = x % y;

        x += 3;

        console.log(resultado);
        console.log(x);
    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Funções</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat</title>
</head>
<body>
    
    <script>
        function soma(numero1, numero2) {
            var resultado = numero1 + numero2;
            return resultado;
        }
        var resultado = soma(10,200);
        console.log(resultado);
    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Condicionais</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat</title>
</head>
<body>
    
    <script>
        function retornoSexo(sexo) {
            // M , F
            /*if(sexo === 'M'){
                return 'Masculino';
            }else if(sexo === 'F'){
                return 'Masculino';
            }else{
                return 'outro';
            }*/

            switch (sexo) {
                case 'M':
                    return 'Masculino';
                case 'F':
                    return 'Feminino';
                default:
                    return  'outro';
            }
        }
        var resultado = retornoSexo('M');
        console.log(resultado);
    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - Operadores lógicos</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat</title>
</head>
<body>
    
    <script>

        // AND(&&) , OR (||), NOT (!==)
        var sexo = 'M', idade = 23;

        /*if (sexo === 'M' || idade >= 18){
            console.log('ok');
        }*/

        var masculino = sexo === 'M'; // true
        console.log(masculino);

    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Condição ternária</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat</title>
</head>
<body>
    
    <script>

        var sexo = 'M';

        var retorno = (sexo === 'M') ? 'Masculino' : 'Feminino';

        console.log(retorno);

    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Estruturas de repetição</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat</title>
</head>
<body>
    
    <script>

        // for , while

        /*for (var i = 0; i <= 100 ;  i++){
            console.log(i);
        }*/

        var j = 12344141;
        while (j > 50){
            console.log(j);
            j /= 5;
        }

    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Intervalo e timeout</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat</title>
</head>
<body>
    
    <script>

        function exibeAlgo(){
            console.log("Ola mundo");
        }
        // intervalos
        //setInterval(exibeAlgo(), 1000)

        // atrasa
        setTimeout(exibeAlgo, 2000)

    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte11">11 - Desafio</a>

- https://station.rocketseat.com.br/api/files/1536602858136.pdf

**1º exercício**
 
Crie uma função que dado o objeto a seguir:

```javascript
var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};

```

Retorne o seguinte conteúdo:

```
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.

```

SOLUÇÃO: [1º exercício](01-introducao/exerc_1.html)


**2º exercício**

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```javascript
function pares(x, y) {
 // código aqui
}
pares(32, 321);
```

SOLUÇÃO: [2º exercício](01-introducao/exerc_2.html)

**3º exercício**

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

```javascript
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
```

Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

SOLUÇÃO: [3º exercício](01-introducao/exerc_3.html)

**4º exercício**

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```javascript
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

SOLUÇÃO: [4º exercício](01-introducao/exerc_4.html)

**5º exercício**

Dado o seguinte vetor de objetos:

```javascript
var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];
```

Escreva uma função que produza o seguinte resultado:

```
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
```

Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array com um separador utilize o join.

SOLUÇÃO: [5º exercício](01-introducao/exerc_5.html)



[Voltar ao Índice](#indice)

---


## <a name="parte12">12 - Eventos inline</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat - mod 2</title>
</head>
<body>

    <div id="app">
        <input onkeypress="mostraAlerta()" />
    </div>

    <script>
        function mostraAlerta() {
            alert('campo alerta ok!');
        }

    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte13">13 - Trabalhando com a DOM</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat - mod 2</title>
</head>
<body>

    <div id="app">
        <input type="text" name="nome" />
        <button class="botao" type="submit">Adicionar</button>
    </div>

    <script>

        // Retorno é um vetor. Se houver varios elementos, pega o primeiro.
        //var inputElement = document.getElementsByTagName('input')[0];
        //var inputElement = document.getElementsByTagName('input');

        // descrever o caminho do elemenot
        //var inputElement = document.querySelector('body div#app input');
        //var inputElement = document.querySelector('input[name=nome]');

        //busca todos os elementos
        //var inputElement = document.querySelectorAll('input');

        //console.log(inputElement);

        var inputElement = document.querySelector('input[name=nome]');
        var btnElement = document.querySelector('button.botao');
        btnElement.onclick = function () {

            var texto = inputElement.value;
            alert(texto);
        }


    </script>
</body>
</html>
```


[Voltar ao Índice](#indice)

---


## <a name="parte14">14 - Lidando com elementos</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat - mod 2</title>
</head>
<body>

    <div id="app">
        <input type="text" id="nome">
    </div>

    <script>

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','https://josemalcher.net');
        linkElement.setAttribute('title', 'Site Jose Malcher Jr.');

        var textElement = document.createTextNode('Acessar meu site');
        linkElement.appendChild(textElement);

        var conteinerElement = document.querySelector('#app');
        conteinerElement.appendChild(linkElement);

        var inputElement = document.querySelector('#nome');
        conteinerElement.removeChild(inputElement);

    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte15">15 - Alterando estilos</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat - mod 2</title>
</head>
<body>

    <div id="app">
        <div class="box"></div>
    </div>

    <script>

    var  boxElement = document.querySelector('.box');

    boxElement.style.width = '100px';
    boxElement.style.height = '100px';
    boxElement.style.backgroundColor = '#f00';

    </script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte16">16 - Desafio</a>

**1º exercício**

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve aparecer na tela.

SOLUÇÃO: [Solução 1](02-Manipulando-DOM/exerc_1.html)

**2º exercício**

Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

```javascript
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0
```

SOLUÇÃO: [Solução](02-Manipulando-DOM/exerc_2.html)


**3º exercício**

A partir do seguinte vetor:

```javascript
var nomes = ["Diego", "Gabriel", "Lucas"];
```

Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:

- Diego  
- Gabriel  
- Lucas  

SOLUÇÃO: [Solução](02-Manipulando-DOM/exerc_3.html)

**4º exercício**

Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

```javascript
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
```

Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

SOLUÇÃO: [Solução](02-Manipulando-DOM/exerc_4.html)

[Voltar ao Índice](#indice)

---


## <a name="parte17">17 - Estrutura do app</a>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Curso JavaScript - Rocketseat - mod 3</title>
</head>
<body>

    <div id="app">
        <ul>
            <li>Fazer Café <a href="#">Excluir</a></li>
            <li>Estudar JS <a href="#">Excluir</a></li>
            <li>Acessar comunidade RS-JS <a href="#">Excluir</a></li>
        </ul>
        <input type="text" placeholder="Digite uma tarefa">
        <button>Adicionar</button>
    </div>

    <script src="todos.js"></script>

</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte18">18 - Iniciando aplicação</a>

```javascript
var listElement  = document.querySelector('#app ul');
var inputElment  = document.querySelector('#app input');
var buttonElment = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estuadr JS',
    'Participar da comunidade JS'
];
```

[Voltar ao Índice](#indice)

---


## <a name="parte19">19 - Renderizando todos</a>

```javascript
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
```

[Voltar ao Índice](#indice)

---


## <a name="parte20">20 - Criando todos</a>

```javascript
var listElement  = document.querySelector('#app ul');
var inputElment  = document.querySelector('#app input');
var buttonElment = document.querySelector('#app button');

var todos = [
    'Fazer tarefas 01',
    'Estuadr JS',
    'Participar da comunidade JS'
];

function renderTodos(){
    
    listElement.innerHTML = '' ; 
    
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo(){
    var todoText = inputElment.value;

    todos.push(todoText);
    inputElment.value = '';
    renderTodos();
}

buttonElment.onclick = addTodo;

```

[Voltar ao Índice](#indice)

---


## <a name="parte21">21 - Excluindo todos</a>

```javascript
var listElement  = document.querySelector('#app ul');
var inputElment  = document.querySelector('#app input');
var buttonElment = document.querySelector('#app button');

var todos = [
    'Fazer tarefas 01',
    'Estuadr JS',
    'Participar da comunidade JS'
];

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
}

buttonElment.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
}
```

[Voltar ao Índice](#indice)

---


## <a name="parte22">22 - Salvando no storage</a>

```javascript
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
```

[Voltar ao Índice](#indice)

---


## <a name="parte23">23 - Requisições AJAX</a>

```javascript
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/josemalcher');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}

```

[Voltar ao Índice](#indice)

---


## <a name="parte24">24 - Promises</a>

```javascript
var minhaPrimise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://apii.github.com/users/josemalcher');
        xhr.send(null);

        xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject('ERROR NA REQUISIÇÃO');
            }
        }
    }   
    });
}

minhaPrimise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error)
    });


```

[Voltar ao Índice](#indice)

---


## <a name="parte25">25 - Utilizando Axios</a>

```javascript
/* var minhaPrimise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/josemalcher');
        xhr.send(null);

        xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }else{
                reject('ERROR NA REQUISIÇÃO');
            }
        }
    }   
    });
}

minhaPrimise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error)
    });
 */
axios.get('https://api.github.com/users/josemalcher')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error)
    });
```

[Voltar ao Índice](#indice)

---


## <a name="parte26">26 - Desafio</a>



[Voltar ao Índice](#indice)

---

