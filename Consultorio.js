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
    this.encontrarPaciente = (nombrePaciente) =>{
        return this.pacientes.find(element => element.nombre == nombrePaciente)           
    }
    
    
}