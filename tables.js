fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(json => {
    console.log(json)
    
    json.forEach(data => {
        let table_body = tbody
        
        let infos = `<tr>
        <td value = ${data.id}> ${data.id}</td> 
        <td> ${data.name}</td>
        <td> ${data.username}</td>
        <td> ${data.email}</td>
        <td> ${data.address.street}, 
        ${data.address.suite} | 
        ${data.address.city},
        ${data.address.zipcode}</td>
        </td></tr>`

        //fazer um if() para filtrar
        table_body.innerHTML += infos
    });
})