/* 
  O que precisamos fazer? - quando clicar no botão do item na lista temos que 
marcar o botão como selecionado e mostrar o item correspondente

    OBJETIVO 1 - quando clicar no botão do item na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando clicar no botão do item mostrar as informações do item
        passo 1 - pegar os itens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no item que o usuário selecionou
        passo 3 - verificar se já existe um item selecionado, se sim, devemos remover a seleção dele 
*/

const botoes = document.querySelectorAll('.botao');
const itens = document.querySelectorAll(".item");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionaritem();

        botao.classList.add("selecionado");
        itens[indice].classList.add("selecionado");
    });
});

function desselecionaritem() {
    const itemSelecionado = document.querySelector(".item.selecionado");
    itemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
