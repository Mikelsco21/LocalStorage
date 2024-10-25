window.onload = function() {
    var nombre = JSON.parse(localStorage.getItem('nomb'));
    var semestres = JSON.parse(localStorage.getItem('semestres'));
    var costoPorSemestre = parseFloat(localStorage.getItem('total'));

    document.getElementById('folio').innerText = Math.floor(Math.random()*1000) ;
    document.getElementById('semestres').innerText = semestres;
    document.getElementById('pagoXSemestre').innerText = `$${(costoPorSemestre * semestres)}`;
    document.getElementById('totalTicket').innerText = `$${((costoPorSemestre * semestres) + 3000)}`;
}
