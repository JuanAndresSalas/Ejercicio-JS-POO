//Instanciar Consultorio
var consultorio = new Consultorio("JS Salud")

//Ingresar datos al consultorio
consultorio.ingresarPacientes(pacientes)

//Mostrar todos los pacientes
consultorio.mostrarPacientes()

//Encontrar paciente por nombre
let rutBuscar = "25987636-3"

if(consultorio.encontrarPaciente(rutBuscar)){
    let paciente = consultorio.encontrarPaciente(rutBuscar);
    console.log("Busqueda Paciente")
    console.log(`Paciente encontrado:\nNombre:${paciente.nombre}\nEdad:${paciente.edad}\nRut:${paciente.rut}\nDiagnostico:${paciente.diagnostico}`)
}else{
    console.log("Busqueda Paciente")
    console.log("Paciente no encontrado")
}

//Modificar valores

consultorio.modificarValor("25987636-3","nombre","1234")
console.log("==========================================================\nLista pacientes actualizada")
consultorio.mostrarPacientes()

//Modificación y guardado con localStorage() del arreglo original
pacientes = consultorio.pacientes; //a la variable pacientes se le asigna el arreglo consultorio.pacientes que está actualizado con las modificaciones
localStorage.setItem('BDPacientes', JSON.stringify(pacientes)) //Guardado en memoria del arreglo como JSON




