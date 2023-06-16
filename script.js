function adicionarItem(salgado) {
    var item = document.createElement("div");
    item.className = "item";
    item.textContent = salgado;
    var selecionados = document.getElementById("selecionados");
    selecionados.appendChild(item);
}
