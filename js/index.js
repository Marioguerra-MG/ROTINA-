const mTarefa = document.querySelector('#tarefa');
const mAdicionar = document.querySelector('#adicionar');
const tbody = document.querySelector("tbody");

const getItensBD = () => JSON.parse(localStorage.getItem('bdfunc')) ?? []
const setItensBD = (itens) => localStorage.setItem('bdfunc', JSON.stringify(itens))

let bTarefa = getItensBD();
let id;


function inserirTarefa (item, index){
    let tr = document.createElement("tr");


    if (item.concluida){
        tr.classList.add('concluida');
    }

    tr.innerHTML = `

        <td class="acao">
            <button id="concluir" onclick="concluirItem(${index})"><i class="fa-regular fa-circle-check"></i></button>
        </td>


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
    setItensBD(bTarefa);
}


function deleteItem(index){
    bTarefa.splice(index, 1);
    tbody.innerHTML='';
    bTarefa.forEach(inserirTarefa);
    setItensBD(bTarefa);

}

function concluirItem (index){
    bTarefa[index].concluida= !bTarefa[index].concluida;
    tbody.innerHTML='';
    bTarefa.forEach(inserirTarefa);
    setItensBD(bTarefa);

}

bTarefa.forEach(inserirTarefa);












