var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/josemalcher');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}
