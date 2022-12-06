let input = document.getElementById('itexto');
let btnadd = document.getElementById('iadd');
let main = document.getElementById('lista');

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)) {
        let novoItem = 
    `<div class="item">
        <div class="item-icone">
            <span class="material-symbols-outlined">
                radio_button_unchecked
                </span>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="deletar"><span class="material-symbols-outlined">delete_forever</span>
                Deletar
            </button>
        </div>
    </div>`;

    main.innerHTML += novoItem;
    }
}