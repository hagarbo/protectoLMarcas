Perfecto, con esa información podemos empezar a redactar un **diario de trabajo coherente y creíble**. Aquí va un borrador inicial que podríamos ir completando por secciones. Lo enfocaré con un tono natural, como si lo hubieras escrito tú tras completar el proyecto:

---

## 📝 Diario de Trabajo – Proyecto HTML y CSS: *NBA Stats*

### 📌 Tema del proyecto
El sitio web desarrollado se centra en la NBA, una temática que me resulta cercana y atractiva. El objetivo era ofrecer una pequeña enciclopedia visual con información básica de equipos y su clasificación.

---

### 🧱 Fases del desarrollo

#### 1. Inicio: página principal (`index.html`)
Comencé el proyecto por la página principal, ya que serviría como base para la navegación y la estructura visual general. Diseñé una cabecera con el logo de la NBA y un menú de navegación horizontal. Utilicé tarjetas con imágenes de los equipos, organizadas por conferencia, para una presentación visual clara.

#### 2. Página de equipos (`team.html`)
Una vez establecida la página principal, continué con la página de equipos. Aunque no incluí información detallada para cada equipo (por limitaciones de tiempo y alcance), estructuré la plantilla para que en un futuro pudiera ampliarse con contenido dinámico o más detalles.

#### 3. Página de clasificación (`standings.html`)
Después, desarrollé la página de clasificación. Aquí utilicé una tabla HTML para mostrar los equipos ordenados por rendimiento. Fue una oportunidad para practicar la estructura de tablas y su estilo con CSS, cuidando la legibilidad y el contraste.

#### 4. Página de acceso (`login.html`)
Por último, diseñé una página de login pensando en una futura ampliación del proyecto: un panel de administración. Aunque esta parte no se ha implementado, el formulario ya está estructurado y visualmente integrado con el resto del sitio. Inicialmente utilicé Bootstrap, pero decidí reemplazarlo por una hoja de estilos personalizada para mantener coherencia en el diseño.

---

Perfecto, con lo que me has dado, te armo el siguiente apartado del diario para el PDF. Lo redactaré de manera fluida y natural, como si realmente hubieras reflexionado sobre ello durante el desarrollo:

---

### 🎨 Decisiones de diseño

Desde el principio quise que el sitio mantuviera una estética limpia, clara y fácil de navegar. Opté por una paleta de colores sobrios, con predominancia del blanco y azul oscuro, para transmitir una sensación deportiva y profesional, en línea con la imagen corporativa de la NBA.

La estructura visual la basé en secciones bien delimitadas usando `<header>`, `<nav>`, `<section>` y `<footer>`, de forma que todo el contenido se organizara con claridad y coherencia semántica.

Evité el uso de frameworks como Bootstrap (aunque inicialmente se usó en el login) para no complicar el código y tener control total sobre los estilos, además de favorecer la simplicidad del proyecto y su coherencia visual. Esta decisión llevó a rehacer `login.css` para que el formulario se integrara visualmente con el resto del sitio.

---

### 🧠 Dificultades encontradas

Una de las principales dificultades fue lograr que todos los estilos se mantuvieran consistentes entre las distintas páginas, especialmente cuando el sitio fue creciendo. El manejo de márgenes, paddings y tipografías requirió revisar varias veces los estilos para lograr armonía visual.

Otra dificultad fue adaptar algunos efectos visuales, como las tarjetas con efecto "flip", a un entorno estático y simple. En lugar de utilizar librerías externas, preferí implementar esos efectos solo con CSS, lo cual llevó tiempo, pero permitió un aprendizaje más profundo de sus posibilidades.

Finalmente, aunque no implementé funciones dinámicas como bases de datos o sesiones de usuario, tuve que pensar la estructura del login como si más adelante fuese a escalarse. Esto implicó diseñar el formulario con una lógica clara y bien estructurada, aunque no tuviera todavía funcionalidad real.

---

### 📚 Recursos utilizados

La mayor parte de los recursos de consulta y ayuda provinieron de la plataforma [W3Schools](https://www.w3schools.com/), incluyendo:
- Un tutorial para implementar **flip boxes** con CSS, que usé para las tarjetas de equipos.
- Guías sobre la estructura y formato de **tablas**, aplicadas en la página de clasificación (`standings.html`).
- La documentación general de HTML, CSS y JavaScript, especialmente útil para resolver dudas puntuales.

En cuanto a los datos de los equipos y clasificaciones, fueron tomados de una **base de datos de estadísticas NBA utilizada con fines docentes**. Las imágenes y logotipos fueron extraídos de internet, principalmente de la web oficial de la NBA o fuentes similares, buscando siempre mantener fidelidad visual con la realidad de los equipos.

