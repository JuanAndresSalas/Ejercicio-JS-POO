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

    //Setters
    this.setNombre = (nombre) =>{this.nombre = nombre};
    this.setEdad = (edad) =>{this.edad = edad};
    this.setRut = (rut) =>{this.rut = rut};
    this.setDiagnostico = (diagnostico) =>{this.diagnostico = diagnostico};


}

