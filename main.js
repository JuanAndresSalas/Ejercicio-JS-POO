//Instanciar Consultorio
var consultorio = new Consultorio("JS Salud")

//Ingresar datos al consultorio
pacientes.forEach(element => {
    let paciente = new Paciente(element.nombre,element.edad,element.rut,element.diagnostico)
    consultorio.setPacientes(paciente)
    });

//Mostrar todos los pacientes
consultorio.mostrarPacientes()

//Encontrar paciente por nombre
let rutBuscar = "18227489-5"

if(consultorio.encontrarPaciente(rutBuscar)){
    let paciente = consultorio.encontrarPaciente(rutBuscar);
    console.log("Busqueda Paciente")
    console.log(`Paciente encontrado:\nNombre:${paciente.nombre}\nEdad:${paciente.edad}\nRut:${paciente.rut}\nDiagnostico:${paciente.diagnostico}`)
}else{
    console.log("Busqueda Paciente")
    console.log("Paciente no encontrado")
}

//Modificar valores

consultorio.modificarValor("18227489-5","nombre","bla bla bla")

consultorio.mostrarPacientes()

pacientes = consultorio.pacientes
console.log(pacientes)

