/*
Se não declarar o GET ou qualquer outra função, por debaixo dos panos o fetcch funciona como um GET
tipo de dado vejm em array (json)
*/

//Agora querendo o tamanho e listar cada titulo da API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
    console.log(`Quantidade de itens: ${json.length}`);
    
    //Digitar foreach para buscar os titulos
    //O foreach passa por elementos em um array, sendo um laço de repetição
    json.forEach(element => {
    console.log(`Título: ${element.title}`);
    });
    //element é um parametro
    //imprimir os titulos de post de usuario igual a 10
    json.forEach(element => {
        if(element.userId === 10){
            console.log(`userID: ${element.title}`);
        }
        });

    })




