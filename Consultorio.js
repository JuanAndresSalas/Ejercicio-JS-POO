function Consultorio(nombre) {
    this.nombre = nombre;
    this.pacientes = []

    //Getters
    this.getNombre = () => { return this.nombre };
    this.getPacientes = () => { return this.pacientes };



    //Setters
    this.setPacientes = (paciente) => { this.pacientes.push(paciente) }

    this.ingresarPacientes = (arreglo) => {
        arreglo.forEach(element => {
            let paciente = new Paciente(element.nombre, element.edad, element.rut, element.diagnostico)
            consultorio.setPacientes(paciente)
        });
    }



    //Funciones Custom

    //Mostrar los pacientes
    this.mostrarPacientes = () => {
        console.log(consultorio.getNombre())
        console.log("==========================================================\nPacientes:")

        consultorio.pacientes.forEach(element => {
            console.log(`Nombre: ${element.nombre}\nEdad: ${element.edad} \nRut: ${element.rut}\nDiagnostico: ${element.diagnostico}`)
        })
        console.log("==========================================================")
    }

    //Esta funcion retorna el objeto completo si encuentra el nombre del paciente
    this.encontrarPaciente = (rut) => {
        if (this.pacientes.find(element => element.rut == rut)) {
            return this.pacientes.find(element => element.rut == rut)
        } else {
            return false
        }

    }

    //Modificar Atributos de pacientes en consultorio
    //Argumentos: 
    //rutPaciente es el rut del paciente al que se modificarán sus datos
    //clave es el nombre del atributo a modificar
    //valorNuevo es valor nuevo del atributo
    this.modificarValor = (rutPaciente, clave, valorNuevo) => {
        let paciente = this.encontrarPaciente(rutPaciente)

        if (paciente) {
            switch (clave) {
                case "nombre":
                    paciente.setNombre(valorNuevo);
                    break;
                case "edad":
                    paciente.setEdad(valorNuevo);
                    break;
                case "rut":
                    paciente.setRut(valorNuevo);
                    break;
                case "diagnostico":
                    paciente.setDiagnostico(valorNuevo);
                    break;
            }

        }

    }

}





