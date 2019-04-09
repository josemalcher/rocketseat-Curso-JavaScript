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



[Voltar ao Índice](#indice)

---


## <a name="parte16">16 - Desafio</a>



[Voltar ao Índice](#indice)

---


## <a name="parte17">17 - Estrutura do app</a>



[Voltar ao Índice](#indice)

---


## <a name="parte18">18 - Iniciando aplicação</a>



[Voltar ao Índice](#indice)

---


## <a name="parte19">19 - Renderizando todos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte20">20 - Criando todos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte21">21 - Excluindo todos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte22">22 - Salvando no storage</a>



[Voltar ao Índice](#indice)

---


## <a name="parte23">23 - Requisições AJAX</a>



[Voltar ao Índice](#indice)

---


## <a name="parte24">24 - Promises</a>



[Voltar ao Índice](#indice)

---


## <a name="parte25">25 - Utilizando Axios</a>



[Voltar ao Índice](#indice)

---


## <a name="parte26">26 - Desafio</a>



[Voltar ao Índice](#indice)

---

