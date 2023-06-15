/*----------------------CONSULTA CEP-----------------
-----------------COM REST API VIACEP E IBGE----------*/


//Preenchendo o select estados com API IBGE
const findStates = () => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    .then(response => response.json())
    .then(json => {
        let inputEstado = document.getElementById('estado')
        // <option value="CE">Ceará</option> é o que precisamos para 
        
        let estados = '' 
        //Inicializando o ´estados´ da API, para ser preenchido posteriormente

        const sortedArray = json.sort((a, b) => {
            if (a.nome < b.nome) return -1;
            if (a.nome > b.nome) return 1;
        });
        //Ordenar o Array
        
        json.forEach(estado => 
            //console.log(estado)
            //foi tirado a chave, para dar retorno direto, com as chaves teria que ter return antes de "estado" na expressao abaixo.
            estados += ` <option value = ${estado.sigla}> ${estado.nome}</option>`
        );
        // console.log(estados)
        inputEstado.innerHTML = estados;
    })
}
findStates()


//Preenchendo o select cidades com API IBGE
const findCitys = async () => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/distritos`)
    .then(response => response.json())
    .then(async json => {
        let inputCidade = document.getElementById('cidade')
        
        let distritos = ''
        
        //Ordenar o Array
        const sortedArray = json.sort((a, b) => {
            if (a.nome < b.nome) return -1;
            if (a.nome > b.nome) return 1;
        });

        await json.forEach(cidade => 
            distritos += `<option value = ${cidade.id}> ${cidade.nome}</option>`
            );
            // console.log(distritos)
            inputCidade.innerHTML = distritos;
        })
}


//Requisição da API VIA CEP e Adição de um Evento no Input
const input_cep = document.getElementById('inputCEP')
const input_logradouro = document.getElementById('inputLogradouro')
const input_number = document.getElementById('inputNumber')
const input_complement = document.getElementById('inputComplement')
const input_bairro = document.getElementById('inputBairro')

input_cep.addEventListener('blur', () => {
    let cep = input_cep.value;
    if(cep.length !== 8){
        alert('Digite a quantidade de número válido do CEP');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(json => {
            input_logradouro.value = json.logradouro;
            input_complement.value = json.complemento;
            input_bairro.value = json.bairro; 

            estado.value = json.uf;
            findCitys();
            cidade.value = json.localidade;
            
        });
        
        input_number.focus();
})