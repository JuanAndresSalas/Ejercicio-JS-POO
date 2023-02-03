function Consultorio(nombre){
    this.nombre = nombre;
    this.pacientes = []

    //Getters
    this.getNombre = this.nombre;
    this.getPacientes = this.pacientes;

    //Setters
    this.setPacientes = (paciente) =>{
        this.pacientes.push(paciente)
    }

    //Custom

    //Esta funcion retorna el objeto completo si encuentra el nombre del paciente
    this.encontrarPaciente = (nombrePaciente) =>{
        if(this.pacientes.find(element => element.nombre == nombrePaciente)){
            return this.pacientes.find(element => element.nombre == nombrePaciente)
        }else{
            return false
        }

    }
    
    
}