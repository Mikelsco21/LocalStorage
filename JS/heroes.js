var datos = {
    nombre: '',
    superpoder: 0
}

var solicitud = {
    mentor: '',
    traje: '',
    entrenamientos: '',
    total: ''
}

function generarSolicitud() {
    datos.nombre = document.getElementById('nomb').value;
    var seleccion = document.getElementById('spp').value;
    localStorage.setItem('nomb', JSON.stringify(datos.nombre));
    
    switch (seleccion) {
        case '1':
            solicitud.mentor = 'Prof. Superman';
            solicitud.traje = 'Traje aerodinámico';
            solicitud.entrenamientos = 4;
            solicitud.total = 500; 
            break;
        case '2':
            solicitud.mentor = 'Prof. Hulk';
            solicitud.traje = 'Traje resistente';
            solicitud.entrenamientos = 6;
            solicitud.total = 600;
            break;
        case '3':
            solicitud.mentor = 'Prof. Flash';
            solicitud.traje = 'Traje ultraligero';
            solicitud.entrenamientos = 8;
            solicitud.total = 550;
            break;
        case '4':
            solicitud.mentor = 'Prof. Batman';
            solicitud.traje = 'Uniforme estándar';
            solicitud.entrenamientos = 10;
            solicitud.total = 300;
            break;
        default:
            solicitud.mentor = '';
            solicitud.traje = '';
            solicitud.entrenamientos = 0;
            solicitud.total = 0;
    }

    localStorage.setItem('mentor', seleccion);
    localStorage.setItem('semestres', solicitud.entrenamientos);
    localStorage.setItem('total', solicitud.total);

    document.getElementById('nom').innerHTML = `Nombre: ${datos.nombre}`;
    document.getElementById('ment').innerHTML = `Mentor: ${solicitud.mentor}`;
    document.getElementById('tra').innerHTML = `Traje: ${solicitud.traje}`;
    document.getElementById('ent').innerHTML = `Semestres: ${solicitud.entrenamientos}`;
    document.getElementById('tot').innerHTML = `Costo X Semestre: $${solicitud.total}`;
    document.getElementById('ticketBtn').style.display = 'block'
}

function generarTicket() {
    window.location.href = 'tick.html';
}
