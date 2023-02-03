var pacientes = [{
    "nombre": "Perico Los Palotes",
    "edad": 31,
    "rut": "17449376-5",
    "diagnostico": "Apendicitis"
}, {
    "nombre": "Juan Salas",
    "edad": 30,
    "rut": "18227489-5",
    "diagnostico": "Hipocondria"
}, {
    "nombre": "Armando Mocha",
    "edad": 7,
    "rut": "25987636-3",
    "diagnostico": "Enfermedad Desconocida"
}, {
    "nombre": "Sandra Reyes",
    "edad": 60,
    "rut": "8975892-0",
    "diagnostico": "Hipertensión"
}]

pacientes = JSON.parse(localStorage.getItem("BDPacientes")) //Recuperación del item guardado en memoria "BDPacientes" y posterior conversion de JSON a arreglo con la funcion JSON.parse()
