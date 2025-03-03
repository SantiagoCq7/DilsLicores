function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.height = "250px";
} //abre la barra de navegavion 

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.height = "0";
} //cierra la barra de navegacion

document.getElementById("catalogobtn").addEventListener("click", function(){
    window.location.href = "catalogo.html"; // redirige al catalogo de licores
})