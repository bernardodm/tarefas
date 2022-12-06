let contador = 0
let input = document.getElementById('itexto');
let btnadd = document.getElementById('iadd');
let main = document.getElementById('lista');

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)) {
        ++contador;

        let novoItem = 
    `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span id="icone_${contador}" class="material-symbols-outlined">
                radio_button_unchecked
                </span>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="deletar"><span class="material-symbols-outlined">delete_forever</span>
                Deletar
            </button>
        </div>
    </div>`;

    main.innerHTML += novoItem;

    input.value= "";
    input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe=="item") {
        item.classList.add('clicado');
        var icone = document.getElementById('icone_'+id);
        item.parentNode.appendChild(item);
    }else {
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_'+id);
    }
}

input.addEventListener("keyup", function(event){
    // Se teclou Enter (tecla 13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnadd.click();
    }
})