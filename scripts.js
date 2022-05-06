'use strict'


 const buscarCEP = async () =>{
//pega o valor do input
    const cep = document.getElementById('cep').value;

    // atribui o link com crase, e no lugar do cep em numero, coloca a variavel que tem o cep digitado
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const dados = await fetch(url)

    const endereco = await dados.json()

    if(endereco.hasOwnProperty('erro')){

         document.getElementById('endereco').value = "CEP NÃO ENCONTRADO"

         document.getElementById('bairro').value = "CEP NÃO ENCONTRADO"

         document.getElementById('cidade').value = "CEP NÃO ENCONTRADO"

         document.getElementById('estado').value = "CEP NÃO ENCONTRADO"

    } else{
        preencherFormulario(endereco)
    }

     
   

 }

 const preencherFormulario = (endereco) =>{

    document.getElementById('endereco').value = endereco.logradouro

    document.getElementById('bairro').value = endereco.bairro

    document.getElementById('cidade').value = endereco.localidade

    document.getElementById('estado').value = endereco.uf

 }



 document.getElementById('cep').addEventListener('focusout', buscarCEP)




