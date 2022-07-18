const nombre = "Andres";

const apellido = "Marin";

const estudiante = nombre.concat(" ", apellido);

const estudianteMayus = estudiante.toUpperCase();

const estudainteMinus = estudiante.toLowerCase();

const numeroLetras = estudiante.length;

const primeraLetra = estudiante.charAt(0);

const ultimaLetra = estudiante.charAt(numeroLetras - 1);

const estudianteSinEspacios = estudiante.replace(/ /g, "");

const nombreEnEstudiante = estudiante.includes(nombre);
