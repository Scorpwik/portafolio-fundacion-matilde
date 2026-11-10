# Joshua Alexander Lozada Zurita

Portafolio académico de Diseño de Medios Interactivos (USFQ) armado a partir del servicio en la Fundación Matilde. El sitio recorre el aprendizaje, la ciudadanía, los valores y los compromisos de esa experiencia. El eje es el proyecto **My Body, My Health**: traducir datos de salud y derechos reproductivos a un lenguaje visual accesible.

La frase de portada lo resume así: explorar la intersección entre el diseño interactivo y el impacto social mediante una intervención técnica responsable.

**Sitio publicado:** [https://scorpwik.github.io/portafolio-fundacion-matilde/](https://scorpwik.github.io/portafolio-fundacion-matilde/)

## Secciones

El sitio son seis páginas HTML. El menú superior enlaza todas. En el inicio hay tarjetas hacia las cinco secciones interiores. El pie repite Aprendizaje, Ciudadanía, Valores y Compromisos.

| Sección | Archivo | Qué muestra |
| --- | --- | --- |
| Inicio | `index.html` | Nombre, carrera y universidad. Distintivo «Portfolio 2025». Contadores de período (2026) y horas de servicio (85), más el enfoque PASEC. |
| Aprendizaje | `aprendizaje.html` | «The Learning Anchor» y el proyecto «My Body, My Health». Tablero comparativo 2018 / 2026 (uso de anticonceptivos, métodos modernos y edad de inicio sexual), meta de conocimiento (+50 % en 6 meses), pre test y post test, talleres y campañas digitales. La reflexión larga abre en un modal. |
| Ciudadanía | `ciudadania.html` | Contraste entre la definición inicial (cumplimiento pasivo) y la actual (ciudadanía estratégica e intervención técnica), con el texto de la transición. |
| Valores | `valores.html` | Tres fichas: empatía crítica, eficiencia solidaria y responsabilidad pedagógica. Cada una abre un modal con el porqué y cómo se aplicó en la fundación. |
| Compromisos | `compromisos.html` | Matriz con pestañas Estudiante y Profesional. Identidad visual para el tercer sector y 40 horas anuales pro bono, con indicadores y cuatro acciones por pestaña. Cada acción abre su metodología. |
| Carta al futuro | `carta.html` | Cierre en video. El reproductor carga el video de YouTube `kPUq3QAus-Y`. |

## Comportamiento de la interfaz

Todo vive en `style.css` y `shared.js`. No hay framework ni paso de compilación.

- Cursor propio: un punto sigue al mouse y un anillo lo persigue con suavizado. El anillo crece al pasar sobre enlaces, botones, fichas y pestañas.
- Barra de progreso fija arriba, según el desplazamiento de la página.
- Los bloques con la clase `reveal` entran al llegar a pantalla (`IntersectionObserver`).
- En el inicio, los números con `data-target` cuentan hasta 2026 y 85. El enfoque PASEC queda como texto.
- En Aprendizaje, las barras `.progress-bar` se llenan con el ancho de `data-width`.
- Modales de reflexión, valores y metodologías. Se cierran con la equis, al hacer clic fuera o con la tecla Escape.
- En Compromisos, `showTab` alterna las pestañas Estudiante y Profesional.
- Fondo fijo con una malla de degradados y un filtro SVG de ruido, animado en bucle.
- Tipografías de Google Fonts: Playfair Display, DM Sans y DM Mono.
- En pantallas de hasta 1024 px, las grillas pasan a una columna y se ocultan los enlaces del menú superior. El recorrido sigue disponible desde las tarjetas del inicio y desde el pie.

## Tecnologías

- HTML5
- CSS3 (variables, grid, flexbox, animaciones y `backdrop-filter`)
- JavaScript en el navegador, sin dependencias
- Google Fonts
- Video embebido de YouTube en la carta
- GitHub Pages, rama `main`, raíz del repositorio

## Cómo verlo en la computadora

Clona el repositorio y sirve la carpeta. Con eso las rutas relativas se resuelven igual que en GitHub Pages.

```bash
git clone https://github.com/Scorpwik/portafolio-fundacion-matilde.git
cd portafolio-fundacion-matilde
python3 -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000).

También puedes abrir `index.html` directo en el navegador: la hoja de estilos y el script usan rutas relativas al archivo. El video de la carta pide conexión a internet.

## Autor

**Joshua Alexander Lozada Zurita**  
GitHub: [Scorpwik](https://github.com/Scorpwik)  
Universidad San Francisco de Quito (USFQ) · Ecuador

## Nombre del repositorio

Antes el repositorio se llamaba `CasaMatildeFundacion`. Ahora se llama `portafolio-fundacion-matilde`.

En el código no queda ninguna ruta absoluta ni mención del nombre anterior. Las páginas, `style.css` y `shared.js` se enlazan con rutas relativas, así que el sitio publicado resuelve bajo la dirección nueva. El perfil de GitHub redirige `Scorpwik/CasaMatildeFundacion` hacia este repositorio. La dirección vieja de GitHub Pages (`https://scorpwik.github.io/CasaMatildeFundacion/`) ya no responde: la vigente es [https://scorpwik.github.io/portafolio-fundacion-matilde/](https://scorpwik.github.io/portafolio-fundacion-matilde/).
