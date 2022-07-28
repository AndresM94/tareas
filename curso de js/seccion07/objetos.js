const datosPersonales = {
    nombre: "Andres",
    apellido: "Marin",
    edad: 23,
    altura: 181,
    eresDesarrollador: true
};

const varEdad = datosPersonales.edad;

const listaDatos = [
    {
        ...datosPersonales
    },
    {
        nombre: "Felipe",
        apellido: "Chaverra",
        edad: 21,
        altura: 174,
        eresDesarrollador: true
    },
    {
        nombre: "Santiago",
        apellido: "Sanchez",
        edad: 21,
        altura: 178,
        eresDesarrollador: false
    }
]

const edadMayor = listaDatos.sort((a, b) => b.edad - a.edad);

console.log(edadMayor);
