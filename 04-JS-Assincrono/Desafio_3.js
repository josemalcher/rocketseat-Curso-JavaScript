/* 

**3º exercício**

A partir do resultado do exemplo anterior adicione um indicador de 
carregamento em tela no lugar da lista apenas enquanto a requisição 
estiver acontecendo:

```html
<li>Carregando...</li>
```

*/

var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepositories(repositories) {
  listElement.innerHTML = "";
  for (repo of repositories) {
    const textElement = document.createTextNode(repo.name);
    const liElement = document.createElement('li');
    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}
function renderLoading(loading) {
  listElement.innerHTML = "";
  var textElement = document.createTextNode('Carregando...');
  var loadingElement = document.createElement('li');
  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}
function renderError(loading) {
  listElement.innerHTML = "";
  var textElement = document.createTextNode('Erro!');
  var errorElement = document.createElement('li');
  errorElement.style.color = "#F00";
  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}
function listRepositories() {
  var user = inputElement.value;
  if (!user) return;
  renderLoading();
  axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function (response) {
      renderRepositories(response.data);
    })
    .catch(function () {
      renderError();
    });
}

/* 

FONTE: https://github.com/Rocketseat/starter-javascript-exercicios/blob/master/M%C3%B3dulo%2003/03.html

*/


