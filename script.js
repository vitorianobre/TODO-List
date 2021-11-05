'use strict';

let qtdTarefas = 0; //contador de tarefas

const lista = document.getElementById('list');

const remover = (id) => document.getElementById(id).remove(); //remove uma tarefa

const check = (posicao) => { //marca uma tarefa como concluída
    const conteudo = document.getElementById(`conteudo-${posicao}`); //pega o texto da tarefa
    conteudo.innerHTML = conteudo.textContent.strike(); //risca o texto
    conteudo.style.color = "#5c5353";
}

const digitarTarefa = document.getElementById('key');
digitarTarefa.addEventListener("keydown", function(e){ //adiciona uma tarefa
    if (e.key == 'Enter') {
       lista.innerHTML +=    `<div id="${qtdTarefas}" class="tarefa">
                                <input type="checkbox" name="tarefa" id="" onchange="if(this.checked) check(${qtdTarefas})"><p id="conteudo-${qtdTarefas}">${digitarTarefa.value}</p><button class="exit" onclick=remover(${qtdTarefas})>x</button></input>
                            </div>` //adiciona a tarefa digitada no input
        digitarTarefa.value = ''; //esvazia o input
        qtdTarefas++;
    }
})
