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

