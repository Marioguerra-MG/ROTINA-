document.getElementById('adicionar'),addEventListener('click', function(event){
    event.preventDefault();

const tarefaInput = document.getElementById('tarefa');

const tarefaTexto = tarefaInput.value.trim();

if (tarefaTexto !== ""){
    const novaLinha = document.createElement('tr');


    
    const novaCelula = document.createElement('td');
    novaCelula.textContent=tarefaTexto;

    novaLinha.appendChild(novaCelula);

    document.querySelector('tbody').appendChild(novaLinha);

    tarefaInput.value = "";
}

});    