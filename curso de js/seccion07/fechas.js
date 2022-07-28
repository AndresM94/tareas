const fechaHoy = new Date();

const fechaNacimiento = new Date(1999, 0, 24);

const hoyEsMasTarde = fechaHoy > fechaNacimiento;

const diaNacimiento = fechaNacimiento.getDate();
const mesNacimiento = fechaNacimiento.getMonth() + 1;
const anyoNacimiento = fechaNacimiento.getFullYear();
