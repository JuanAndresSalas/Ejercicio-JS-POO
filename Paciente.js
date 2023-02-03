function Paciente (nombre,edad,rut,diagnostico){
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;

    //Getters
    this.getNombre = () =>{return this.nombre};
    this.getEdad = () =>{return this.edad}; 
    this.getRut = () =>{return this.rut}; 
    this.getDiagnostico = () =>{return this.diagnostico}; 
}

