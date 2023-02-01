function mudaCorFundo(){
    const menu = document.querySelector("#corFundo");
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}
