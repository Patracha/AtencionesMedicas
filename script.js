let listaRadiologia = [
    { hora: "11:00", especialista: "Ignacio Schulz", paciente: "Francisca Rojas", rut: "9878782-1", prevision: "Fonasa" },
    { hora: "11:30", especialista: "Federico Subercaseaux", paciente: "Pamela Estrada", rut: "15345241-3", prevision: "Isapre" },
    { hora: "15:00", especialista: "Fernando Wurthz", paciente: "Armando Luna", rut: "16445345-9", prevision: "Isapre" },
    { hora: "15:30", especialista: "Ana Maria Godoy", paciente: "Manuel Godoy", rut: "17666419-0", prevision: "Fonasa" },
    { hora: "16:00", especialista: "Patricia Suazo", paciente: "Ramon Ulloa", rut: "14989389-K", prevision: "Fonasa" }
];
let listaTraumatologia = [
    { hora: "11:00", especialista: "Ignacio Schulz", paciente: "Francisca Rojas", rut: "9878782-1", prevision: "Fonasa" },
    { hora: "11:30", especialista: "Federico Subercaseaux", paciente: "Pamela Estrada", rut: "15345241-3", prevision: "Isapre" },
    { hora: "15:00", especialista: "Fernando Wurthz", paciente: "Armando Luna", rut: "16445345-9", prevision: "Isapre" },
    { hora: "15:30", especialista: "Ana Maria Godoy", paciente: "Manuel Godoy", rut: "17666419-0", prevision: "Fonasa" },
    { hora: "16:00", especialista: "Patricia Suazo", paciente: "Ramon Ulloa", rut: "14989389-K", prevision: "Fonasa" }
];
let listaDental = [
    { hora: "11:00", especialista: "Ignacio Schulz", paciente: "Francisca Rojas", rut: "9878782-1", prevision: "Fonasa" },
    { hora: "11:30", especialista: "Federico Subercaseaux", paciente: "Pamela Estrada", rut: "15345241-3", prevision: "Isapre" },
    { hora: "15:00", especialista: "Fernando Wurthz", paciente: "Armando Luna", rut: "16445345-9", prevision: "Isapre" },
    { hora: "15:30", especialista: "Ana Maria Godoy", paciente: "Manuel Godoy", rut: "17666419-0", prevision: "Fonasa" },
    { hora: "16:00", especialista: "Patricia Suazo", paciente: "Ramon Ulloa", rut: "14989389-K", prevision: "Fonasa" }
];

let primeraR = document.querySelector("#primeraR");
let ultimaR = document.querySelector("#ultimaR");
let primeraT = document.querySelector("#primeraT");
let ultimaT = document.querySelector("#ultimaT");
let primeraD = document.querySelector("#primeraD");
let ultimaD= document.querySelector("#ultimaD");

function mostrarAtencion(arreglo, especialidad, primera, ultima) {
    let primeraAtencion = arreglo[0];
    let ultimaAtencion = arreglo[arreglo.length - 1];


   primera.textContent=(`Primera atención: (${especialidad}): ${primeraAtencion.paciente} - ${primeraAtencion.prevision}`);
    ultima.textContent=(`Última atención: (${especialidad}): ${ultimaAtencion.paciente} - ${ultimaAtencion.prevision}`);
}

mostrarAtencion(listaRadiologia, "Radiología", primeraR, ultimaR);
mostrarAtencion(listaTraumatologia, "Traumatologia", primeraT, ultimaT);
mostrarAtencion(listaDental, "Dental", primeraD, ultimaD);

tabla = document.querySelector("#tabla");
tabla2 = document.querySelector("#tabla2");
tabla3 = document.querySelector("#tabla3");

function agregarFilas(arreglo,id){
    let filas = ``
    arreglo.forEach(function(item){

        filas+=
        `<tr>
                <td>${item.hora}</td>
                <td>${item.especialista}</td>
                <td>${item.paciente}</td>
                <td>${item.rut}</td>
                <td>${item.prevision}</td>
            </tr>`
             
    })
    id.innerHTML += filas;
}

agregarFilas(listaRadiologia,tabla);
agregarFilas(listaTraumatologia,tabla2);
agregarFilas(listaDental,tabla3);