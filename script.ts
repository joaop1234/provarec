function adicionarItem(salgado: string): void {
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = salgado;
    
    const selecionados = document.getElementById("selecionados");
    selecionados.appendChild(item);
  }
  