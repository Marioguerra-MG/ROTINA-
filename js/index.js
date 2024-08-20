const mTarefa = document.querySelector('#tarefa');
const mAdicionar = document.querySelector('#adicionar');
const tbody = document.querySelector("tbody");

let bTarefa = [];
let id;

function inserirTarefa (item, index){
    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${item.tarefa}</td>

        <td class="acao">
            <button id="deletar" onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
        </td>
    
    `;

    tbody.appendChild(tr)

}

mAdicionar.onclick = e =>{
    if(mTarefa.value.trim() === ''){
        return;
    }

    
    e.preventDefault();

    if(id !==undefined){
        bTarefa[id] = {'tarefa': mTarefa.value}

    }else{
        bTarefa.push({'tarefa' : mTarefa.value});
    }

    mTarefa.value='';
    id= undefined;

    tbody.innerHTML = '';
    bTarefa.forEach(inserirTarefa);
}


function deleteItem(index){
    bTarefa.splice(index, 1);
    tbody.innerHTML='';
    bTarefa.forEach(inserirTarefa);

}










