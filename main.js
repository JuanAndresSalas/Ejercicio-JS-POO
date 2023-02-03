var consultorio = new Consultorio("JS Salud")

pacientes.forEach(element => {
    let paciente = new Paciente(element.nombre,element.edad,element.rut,element.diagnostico)
    consultorio.setPacientes(paciente)
    });

//Mostrar todos los pacientes
console.log("=============================\nPacientes:")
consultorio.pacientes.forEach(element =>{
    console.log(`Nombre: ${element.nombre}\nEdad: ${element.edad} \nRut: ${element.rut}\nDiagnostico: ${element.diagnostico}`)
} )
console.log("=============================")

//Encontrar paciente por nombre
console.log(consultorio.encontrarPaciente("Juan Salas"))

