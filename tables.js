
//_______________ JEITO SEM ASYNC AWAIT___________________
//______________________15/06/2023________________________


// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then(response => response.json())
// .then(json => {
//     console.log(json)
    
//     json.forEach(data => {
//         let table_body = tbody
        
//         let infos = `<tr>
//         <td value = ${data.id}> ${data.id}</td> 
//         <td> ${data.name}</td>
//         <td> ${data.username}</td>
//         <td> ${data.email}</td>
//         <td> ${data.address.street}, 
//         ${data.address.suite} | 
//         ${data.address.city},
//         ${data.address.zipcode}</td>
//         </td></tr>`

//         //fazer um if() para filtrar
//         table_body.innerHTML += infos
//     });
// })


//_______________ JEITO COM ASYNC AWAIT___________________
//______________________22/06/2023________________________

// const construir_tabela = async () => {
//     const content = document.getElementById('content');

//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const usuarios = await response.json();

//     const usuariosHTML = usuarios.map(element =>
//         `<tr>
//             <td value = ${data.id}> ${data.id}</td> 
//             <td> ${data.name}</td>
//             <td> ${data.username}</td>
//             <td> ${data.email}</td>
//             <td> ${data.address.street}, 
//             ${data.address.suite} | 
//             ${data.address.city},
//             ${data.address.zipcode}</td>
//         </td></tr>`
//     )

//     usuariosHTML.forEach((elementoHTML) => content.innerHTML += elementHTML)    
// }

//construir_tabela()    ->Quem tem que dizer é o html com a funcao onload
//Ele disse que tinha que Particionar o código

const buscarUsuarios = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json();

    return usuarios;
}

const usuarioToRowHTML = (usuario) => {

        return  `
            <tr>
                <td value = ${usuario.id}> ${usuario.id}</td> 
                <td> ${usuario.name}</td>
                <td> ${usuario.username}</td>
                <td> ${usuario.email}</td>
                <td> ${usuario.address.street}, 
                ${usuario.address.suite} | 
                ${usuario.address.city},
                ${usuario.address.zipcode}</td>
                </td>
            </tr>
        `
}

const construir_tabela = async () => {
    const usuarios = await buscarUsuarios();

    const content = document.getElementById('content');
    
    content.innerHTML = ""
    const usuariosHTML = usuarios.filter(filtrar).map(usuarioToRowHTML)
    
    usuariosHTML.forEach((elementHTML) => content.innerHTML += elementHTML)    
}

const filtrar = (usuario) => {
    const filtro = document.getElementById('filtro');
    // console.log(filtro)
    return usuario.name.toUpperCase().includes(filtro.value.toUpperCase())
}