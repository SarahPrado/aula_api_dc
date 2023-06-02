const findStates = () => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(response => response.json())
    .then(json => {
        let inputEstado = document.getElementById('estado')
        // <option value="CE">Ceará</option> é o que precisamos para 
        
        let estados = '' 
        json.forEach(estado => 
            // console.log(estado)
            //foi tirado a chave, para dar retorno direto, com as chaves teria que ter return antes de "estado" na expressao abaixo.
            estados += ` <option value = ${estado.sigla}> ${estado.nome}</option>`
        );
        console.log(estados)
        inputEstado.innerHTML = estados;
    })
}

findStates()