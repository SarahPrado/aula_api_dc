/*Trazer o usuário, trazer o name e o username e deixar o nome em maiúsculo e o username em minusculo*/

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
    json.forEach(element => {
        console.log(`${element.id} - ${element.name.toUpperCase()}, ${element.username.toLowerCase()}`);
    });
    console.log(`------------------------------------------------`);

    json.filter(i => i.id % 2 == 0).forEach(item =>{
        console.log(`${item.id} - ${item.name.toUpperCase()}, ${item.username.toLowerCase()}`);
        })
  })