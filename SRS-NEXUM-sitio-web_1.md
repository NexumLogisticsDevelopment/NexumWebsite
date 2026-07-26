# Documento de Especificaciones Técnicas y de Requerimientos (SRS)
## Sitio Web Corporativo — NEXUM Logistic Solutions

| | |
|---|---|
| **Versión** | 1.0 |
| **Fecha** | 16 de julio de 2026 |
| **Cliente** | NEXUM Logistic Solutions (Manzanillo, Colima, México) |
| **Propósito del documento** | Servir de base para que un programador o equipo de desarrollo externo evalúe el estado actual del proyecto y estime el esfuerzo de las siguientes fases |
| **Estado del proyecto** | Front-end estático (landing page) funcional y sin desplegar públicamente. Sin backend, base de datos ni integraciones de terceros. |

---

## 1. Resumen del Proyecto

### 1.1 Objetivo principal
Construir la presencia web oficial de NEXUM Logistic Solutions, una empresa de transporte terrestre de carga que inicia operaciones desde el puerto de Manzanillo, Colima. El sitio busca transmitir profesionalismo y credibilidad frente a clientes potenciales (principalmente empresas que importan/exportan mercancía por el puerto de Manzanillo) y generar contacto comercial directo, sin depender —por ahora— de un sistema propio de cotización o gestión de leads.

### 1.2 Público objetivo
- Empresas importadoras/exportadoras con operación en o hacia el puerto de Manzanillo.
- Gerentes de logística/compras que necesitan transporte terrestre de carga contenerizada, sobredimensionada, a granel (bolsas/big bags) o maquinaria pesada hacia los principales corredores industriales de México (Guadalajara, Bajío, Querétaro, CDMX, San Luis Potosí, Saltillo, Monterrey).
- Tráfico mayormente encontrado por referencia directa (tarjeta, WhatsApp, recomendación) más que por búsqueda orgánica, dado que el SEO técnico aún no está desarrollado (ver sección 4).

### 1.3 Alcance actual
Lo construido hasta hoy es una **landing page de una sola página (one-pager)**, sin backend, pensada como tarjeta de presentación digital y canal de contacto rápido (WhatsApp/correo).

### 1.4 Fundamentos del Desarrollo
Este sitio funcionará como carta de presentación corporativa para clientes potenciales. En su Fase 0/1, el entregable será una página web estática, altamente optimizada y profesional, pero diseñada bajo una arquitectura que permita crecer sin reescribir la base de código.

Al desarrollar, Claude debe alinearse con las siguientes directivas:

Dependencias Mínimas y Justificadas:

Priorizar funcionalidades nativas del lenguaje/framework antes de instalar paquetes externos.

Cualquier librería adicional debe estar ampliamente probada en producción, bien mantenida y responder a una necesidad clara (evitar la reinvención de la rueda, pero priorizar un bundle ligero).

### 1.5 Arquitectura Limpia y Escalable:

Mantener una separación clara de responsabilidades (UI/Componentes, Estilos, Configuración, Contenido).

Código modular, legible y auto-documentado.

Manejo Dinámico de Assets (Imágenes):

Dado que las imágenes cambiarán con frecuencia, el sitio no debe acoplar rutas fijas dentro del JSX/HTML de los componentes UI.

Solución requerida: Crear un archivo de configuración centralizado (constants/images.ts o un esquema de datos local en JSON/YAML) desde donde se importen y mapeen los assets visuales. Así, actualizar una imagen requerirá modificar solo una línea de código.

Despliegue Simple (Zero-Config Deployment):

El proyecto debe ser compatible con un flujo CI/CD sencillo en plataformas de hosting estático (Vercel, Netlify o Cloudflare Pages).

### 1.6 Visión a Futuro y Escalabilidad
Aunque la primera versión es 100% estática (SSG/HTML), el proyecto evolucionará hacia una plataforma web interactiva en fases posteriores.

Para evitar deuda técnica en el desarrollo actual, Claude debe considerar el siguiente roadmap técnico:

Fase Actual (Fase 1 - Landing Estática): Presentación de marca, catálogo/servicios e imágenes actualizables.

Fases Subsecuentes (Funcionalidad Dinámica):

Módulo de autenticación y login de usuarios.

Integración con Backend/API para consulta de historial de envíos.

Generación y visualización de recibos/comprobantes digitales.

Instrucción para el modelo: Elige un stack o arquitectura que permita servir páginas estáticas hoy, pero que admita la adición de rutas API (API routes), middleware de autenticación y llamadas a microservicios en el futuro sin requerir una migración completa del framework.

---

## 2. Funcionalidades Implementadas (Estado Actual)

### 2.1 Arquitectura técnica actual
- **Sitio estático de una sola página**, entregado como un único archivo `index.html` autocontenido (HTML + CSS + JavaScript inline, sin dependencias de build).
- **Sin backend, sin base de datos, sin CMS.** No hay ningún servidor de aplicación; todo el comportamiento ocurre en el navegador del usuario.
- **Sin build system/bundler** (no hay Webpack/Vite/npm scripts de producción): el CSS y JS están escritos directamente en el HTML, sin minificar.
- **Todas las imágenes están embebidas como base64** directamente en el HTML (no se sirven como archivos separados). Esto se decidió para garantizar que el archivo funcionara al abrirlo directamente desde disco o al compartirlo suelto, pero tiene implicaciones de rendimiento que se documentan en la sección 4.
- Peso actual del archivo: **~2.8 MB** en un solo request HTML.
- Única dependencia externa real: **Google Fonts** vía CDN (`fonts.googleapis.com`) para las tipografías Poppins e Inter, con degradación aceptable si no carga.
- Sistema de iconos: **SVG inline hechos a mano** (sin librería externa tipo Font Awesome), definidos en un objeto JavaScript (`ICONS`) y renderizados dinámicamente vía `data-icon`.


### 2.2 Secciones/vistas completadas
El sitio incluye las siguientes secciones, todas maquetadas, responsivas y con contenido real (no texto de relleno):

- **Header/navegación fija**, con logo real de la empresa, menú de anclas a cada sección y menú hamburguesa funcional en móvil.
- **Hero** con propuesta de valor, botones de llamado a la acción y chips de atributos clave.
- **Nosotros** (quiénes somos), con imagen de apoyo.
- **Misión y Visión**, con tarjetas y cita destacada.
- **Por qué elegirnos** (6 valores de la empresa en tarjetas).
- **Servicios** (4 tarjetas: Full/doble remolque, Sencillo/carga contenerizada, Camioneta 3.5 Tons, Lowboy/carga especializada), cada una con fotografía real y descripción.
- **Tipos de carga que transportamos** (sección dedicada con 6 categorías: carga contenerizada, rollos, pallets/tarimas, bolsas/big bags, carga sobredimensionada, maquinaria y equipo pesado), con enlace directo a WhatsApp para consultar casos no listados.
- **Cobertura/Manzanillo**, con listado de rutas hacia los principales destinos y mapa de cobertura textual.
- **Proceso de trabajo** (5 pasos) y **valor agregado** (5 tarjetas adicionales).
- **Sección de contacto/cotización** con formulario (ver detalle en 2.3).
- **Footer** con datos de contacto, navegación secundaria y enlaces sociales/WhatsApp.
- Botón flotante de WhatsApp y botón de "volver arriba" en toda la navegación.
- Animaciones de aparición al hacer scroll (`IntersectionObserver`), con mecanismo de respaldo (`setTimeout` de seguridad) para que el contenido nunca quede oculto si el JavaScript falla.

### 2.3 Formulario de contacto/cotización — cómo funciona realmente
Es importante que el desarrollador entienda que esto **no es un cotizador real**, sino un generador de mensaje:

- El formulario captura nombre, empresa, teléfono, tipo de carga (select), ruta y mensaje libre.
- La única validación es del lado del cliente (campo "nombre" obligatorio); no hay validación de formato de teléfono, ni server-side, ni protección anti-spam/bot (sin CAPTCHA ni rate limiting).
- Al enviar, JavaScript arma un mensaje de texto con los datos capturados y **abre una ventana nueva hacia `wa.me` (WhatsApp) con el mensaje pre-llenado**. El usuario final debe presionar "enviar" dentro de WhatsApp para que el mensaje realmente llegue.
- **No hay backend, no hay envío de correo real, no hay almacenamiento de la cotización en ningún lado.** Si el usuario cierra la ventana de WhatsApp sin enviar, el "lead" se pierde por completo y la empresa nunca se entera de que existió.
- El botón "Cotiza ahora" del header y otros CTAs del sitio son enlaces directos a `wa.me` con un mensaje genérico predefinido (no pasan por el formulario).
- El correo (`ventas@nexumlogisticmx.com`) se usa únicamente vía enlaces `mailto:`, sin ningún sistema transaccional detrás.

### 2.4 Sistema de diseño
- Paleta de marca definida en variables CSS (navy `#0B1F3B` / naranja `#F0701E` y variantes), tipografía Poppins (encabezados) + Inter (cuerpo).
- Diseño responsivo con puntos de quiebre para escritorio, tablet y móvil, probado visualmente (no automatizado) en varios anchos de viewport.
- Logo real de la empresa (proporcionado por el cliente en PNG) embebido en header y footer.

### 2.5 Contenido
- Todo el copy (textos de servicios, valores, misión/visión, tipos de carga) fue redactado a partir de una presentación comercial en PDF proporcionada por el cliente, no es texto genérico de plantilla.
- Todas las fotografías (camiones, puerto, contenedores) fueron extraídas y recortadas de ese mismo PDF —no son banco de imágenes con licencia propia— con las limitaciones de resolución que se detallan en la sección 4.

---

## 3. Funcionalidades Pendientes o En Scope

Ninguno de los siguientes puntos está desarrollado. Se documentan porque se mencionaron como posibles necesidades futuras del negocio y deben cotizarse como trabajo nuevo, no como ajuste menor:

- **Sitio multi-idioma** (hoy el sitio es 100% en español).

---

## 4. Deuda Técnica y Desafíos

Puntos que el nuevo agente debería revisar o decidir de inmediato antes de continuar el desarrollo:

- **Arquitectura de archivo único con imágenes en base64.** Es una solución válida para una demo portátil, pero **no es un patrón viable para producción**: infla el HTML a ~2.8 MB, impide el cacheo HTTP independiente de cada imagen, y obliga a descargar todo el peso del sitio aunque el usuario no baje de la primera sección. Se recomienda migrar a archivos de imagen separados, optimizados (WebP/AVIF), sensiblemente comprimidos y servidos por CDN.

- **Sin build system ni minificación.** CSS y JS viven inline en el HTML sin empaquetar ni comprimir; cualquier plan de mantenimiento a mediano plazo debería migrar esto a un proyecto con build real (Vite, esbuild, etc.), separando componentes/archivos.


- **Sistema de iconos hecho a mano** (SVGs embebidos como strings en JavaScript). Funciona bien para el set actual (~40 iconos) pero no escala cómodamente si se necesitan muchos más; considerar una librería de iconos real si el proyecto crece.
- 
- **Calidad de imágenes limitada por la fuente.** Todas las fotografías provienen de un PDF comercial exportado desde Canva, cuya resolución nativa por diapositiva es de solo ~1672×941 px (confirmado con herramientas de extracción). Se hizo lo posible por maximizar nitidez, pero para una relanzamiento serio se recomienda fotografía profesional real de la flota/operación del cliente, o banco de imágenes con licencia adecuada.
- 
- **Formulario sin protección ni persistencia.** No hay CAPTCHA, rate limiting, ni validación server-side; y como se explicó en 2.3, si el usuario no completa el envío en WhatsApp, la cotización se pierde sin dejar rastro. Cualquier inversión en "cotizador real" (sección 3) debería resolver esto de raíz.

- **Sitio aún no desplegado públicamente.** No hay hosting contratado, no hay HTTPS, no hay dominio apuntando al sitio. El dominio `nexumlogisticmx.com` existe y su correo corre en Google Workspace, pero la conexión DNS hacia el hosting del sitio está pendiente de completarse.
  
- **Sin pruebas cross-browser formales.** Las verificaciones automatizadas se hicieron sobre un motor basado en Chromium; no se probó manualmente en Safari, Firefox u otros navegadores/dispositivos reales.

- **Un solo canal/número de contacto hardcodeado** (un número de WhatsApp y un correo) repetido en múltiples lugares del HTML; si la empresa crece y necesita enrutar por departamento o agente, hoy requeriría editar el HTML manualmente en varios puntos en lugar de un solo lugar de configuración.

---

*Documento generado a partir del desarrollo iterativo del sitio realizado en conversación con el cliente; refleja el estado del archivo `index.html` entregado más reciente al momento de esta versión.*
