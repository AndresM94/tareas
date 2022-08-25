let nombre = "Andres"
let apellido = "Marin"

let persona = {
    nombre: "Andres",
    apellido: "Marin"
}

// sessionStorage.setItem("persona", JSON.stringify(persona))
// localStorage.setItem("persona", JSON.stringify(persona))

const hoy = new Date()
// document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(hoy.getTime + 2 * 60000)}`
