const form = document.getElementById('formulario');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    salvaContatos();
});

function salvaContatos() {
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');

    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += `<td><img src="./Images/mobile.png" alt="telefone celular" /></td>` 
    linha += `</tr>`;

    linhas += linha;

    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;

    nome.value = '';
    telefone.value = '';
}
