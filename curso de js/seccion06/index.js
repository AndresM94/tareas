const listaDeCompras = ["Pan", "Leche", "Arroz", "Carne", "Azucar"];
listaDeCompras.push("Aceite de Girasol");
listaDeCompras.pop();

const peliculasFavoritas = [
    {
        titulo: "Soy el número cuatro",
        director: "D.J. Caruso",
        fecha: new Date(2011, 1, 18)
    },
    {
        titulo: "Iron Man 3",
        director: "Shane Black",
        fecha: new Date(2013, 3, 26)
    },
    {
        titulo: "Escuadron 6",
        director: "Michael Bay",
        fecha: new Date(2019, 11, 10)
    }
];

const peliculasNuevas = peliculasFavoritas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));

const directores = peliculasFavoritas.map(director => director.director);

const titulos = peliculasFavoritas.map(titulo => titulo.titulo);

const directores_titulos = directores.concat(titulos);

const directores_titulos_prop = [...directores, ...titulos];
