🧪 Prueba Técnica - Frontend Junior (Angular)

Este repositorio contiene la solución desarrollada para la prueba técnica de desarrollador Frontend Junior. El proyecto fue realizado con Angular 19.2.0 y diseñado bajo una arquitectura modular y escalable, siguiendo las buenas prácticas del desarrollo moderno en frontend.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


🚀 Tecnologías utilizadas

* Angular v19.2.0

* SCSS como preprocesador de estilos

* Metodología BEM para el nombramiento de clases CSS

* Arquitectura modular basada en componentes reutilizables, páginas (pages) y plantillas (templates)

* Diseño first-desktop (adaptado posteriormente a mobile)

* Fuentes externas: Netflix Sans

* Diseño base: Figma

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


📁 Estructura del proyecto

bash

CopiarEditar

src/

│

├── app/

│   ├── components/       # Componentes reutilizables

│   ├── pages/            # Páginas principales

│   │   └── home/         # Ejemplo: página de inicio

│   │       ├── template/ # Template de navegación

│   └── core/             # Servicios, modelos, etc.

│

├── assets/

│   ├── icons/            # Iconos descargados desde Figma

│   ├── images/           # Imágenes del diseño

│   └── fonts/            # Tipografía Netflix Sans

│   └── styles/           # estilos de reset y fonts

│

└── styles/

└── main.scss         # Archivo principal de estilos


\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


🧰 Instalación y ejecución

1. Clona este repositorio:

```bash

git clone https://github.com/usuario/nombre-proyecto.git

cd nombre-proyecto
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
ng serve
```

4. Abre el navegador en:

http://localhost:4200/

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


📌 Notas de implementación

* El proyecto utiliza Angular Routing para navegar entre secciones.

* Se implementó scroll horizontal en móviles únicamente para el contenedor de categorías usando overflow-x.

* La navegación activa (por URL) se gestiona dinámicamente agregando clases como --active en base a la ruta.

* Los estilos están organizados con BEM, favoreciendo el mantenimiento y la claridad.

* Cada componente cuenta con su propia carpeta, archivos SCSS y HTML separados.

* Se priorizó un diseño first-desktop con media queries adaptados a móviles.

* La tipografía Netflix Sans fue incorporada manualmente desde archivo descargado.

* Todos los íconos e imágenes fueron obtenidos directamente desde el diseño en Figma.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


🎨 Diseño en Figma

Se siguió al 100% el diseño entregado en Figma.

🔗 [Figma - Diseño Prueba Desarrollador F.E Junior](https://www.figma.com/design/KhiZKnlVxkmtCsAkMjpz6d/Dise%C3%B1o-prueba-desarrollador-F.E-Junior?node-id=2-977&t=0cqxSRxEqN0EIbxX-0)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


🖋️ Fuentes e íconos

* Netflix Sans:

Descargado desde: https://font.gooova.com/fonts/14200/netflix-sans-font.html

* Iconos e imágenes:

Todos los recursos visuales fueron descargados directamente desde el Figma proporcionado.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_


🧑‍💻 Autor

Andrés Felipe Marín

Prueba Técnica - Frontend Junior
