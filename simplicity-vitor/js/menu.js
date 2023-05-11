const botao = document.querySelector("nav h2");
const linksMenu = document.querySelector(".menu");

const icone = document.querySelector(".icone");
botao.addEventListener("click", function(event){
    event.preventDefault();
    console.log("botao clicado");
    linksMenu.classList.toggle("aberto");


/* lógica para alternancia do texto/icone
Se a classe "aberto" estiver aplicada aos linksMenu,
então mude o texto/ícone para "fechar".
Senão, continue mostrando o texto/icone "aberto". */

if ( linksMenu.classList.contains("aberto") ) {
    icone.innerHTML = "Fechar";
    } else {
        icone.innerHTML = "Menu &equiv;";
    }
});
