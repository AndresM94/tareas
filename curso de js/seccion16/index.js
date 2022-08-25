const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", (evento) => {
        parrafo.classList.add("dragging")
        evento.dataTransfer.setData("id", parrafo.id)
        const img_fantasma = document.querySelector(".imagen-fantasma")
        evento.dataTransfer.setDragImage(img_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", (evento) => {
        evento.preventDefault()
    })

    seccion.addEventListener("drop", (evento) => {
        const id_parrafo = evento.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", e => {
    e.preventDefault()
})

papelera.addEventListener("drop", e => {
    const id_parrafo = e.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
