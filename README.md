# Plantilla React + TypeScript

Plantilla de aplicación cliente construida con React 19, TypeScript 6, Vite 8 y Tailwind
CSS 4. Incluye rutas con hash, tema claro/oscuro, estilos globales CSS-first y una utilidad
para combinar clases de Tailwind.

## Requisitos

- Node.js 22.22 o superior. React Router 8 exige esta versión mínima.
- npm, incluido con Node.js.

Comprueba las versiones instaladas:

```bash
node --version
npm --version
```

## Personalizar el nombre antes de comenzar

Los ejemplos de este README utilizan `Plantilla` como nombre predeterminado del bundle y de
su ruta pública. Si deseas cambiarlo, es recomendable hacerlo antes de comenzar a desarrollar
o generar el primer bundle.

Por ejemplo, para utilizar `MiPortafolio`, actualiza `vite.config.ts`:

```ts
export default defineConfig({
  base: '/MiPortafolio/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'MiPortafolio',
  },
})
```

Los dos valores cumplen funciones diferentes:

```text
outDir = nombre de la carpeta física generada
base   = ruta pública desde la que se sirve la aplicación
```

Si IIS publica la aplicación en `http://localhost/MiPortafolio/`, utiliza:

```ts
export default defineConfig({
  base: '/MiPortafolio/',
  build: {
    outDir: 'MiPortafolio',
  },
})
```

Si la carpeta generada se llama `MiPortafolio/`, pero su contenido se publica directamente en
`http://localhost/`, utiliza:

```ts
export default defineConfig({
  base: '/',
  build: {
    outDir: 'MiPortafolio',
  },
})
```

También debes sustituir el nombre del bundle en `.gitignore`:

```gitignore
/MiPortafolio/
```

Y en `.prettierignore`:

```text
MiPortafolio/
```

Por tanto, al renombrar el bundle revisa estos cinco lugares:

1. `base` en `vite.config.ts`.
2. `build.outDir` en `vite.config.ts`.
3. La carpeta excluida en `.gitignore`.
4. La carpeta excluida en `.prettierignore`.
5. La opción `--base` del script `build:github` en `package.json`, si también cambias el nombre
   del repositorio o su ruta en GitHub Pages.

No necesitas modificar las rutas construidas con `import.meta.env.BASE_URL`; Vite utilizará
automáticamente el nuevo valor de `base`.

## Instalación y primer inicio

Después de clonar o descargar el repositorio, instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local. Como el proyecto tiene configurada la base
`/Plantilla/`, normalmente se accede mediante una dirección similar a:

```text
http://localhost:5173/Plantilla/
```

## Comandos disponibles

| Comando                | Función                                                  |
| ---------------------- | -------------------------------------------------------- |
| `npm install`          | Instala las dependencias declaradas en `package.json`.   |
| `npm run dev`          | Inicia Vite en modo desarrollo con HMR.                  |
| `npm run build`        | Genera el bundle para la ruta `/Plantilla/`.             |
| `npm run build:github` | Genera el bundle con la base requerida por GitHub Pages. |
| `npm run preview`      | Sirve localmente el último bundle generado.              |
| `npm run lint`         | Revisa los archivos TypeScript y TSX con ESLint.         |
| `npm run format`       | Formatea los archivos compatibles con Prettier.          |
| `npm run format:check` | Comprueba el formato sin modificar archivos.             |

Actualmente no hay un runner de pruebas automatizadas configurado.

Antes de entregar cambios se recomienda ejecutar:

```bash
npm run format
npm run lint
npm run build
```

## Estructura del proyecto

```text
.
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── lib/
│   ├── styles/
│   ├── view/
│   └── main.tsx
├── index.html
├── vite.config.ts
├── package.json
└── tsconfig.json
```

### `src/main.tsx`

Es el punto de entrada de React. Monta la aplicación bajo `StrictMode` y registra las vistas
disponibles mediante React Router.

### `src/components/`

Contiene componentes visuales reutilizables, por ejemplo botones, campos, tarjetas, diálogos
o el selector de tema. Un componente puede aceptar propiedades y `className` para adaptarse a
diferentes vistas sin duplicar su implementación.

Un componente puede tener sus propios tipos y estilos dentro de su carpeta cuando solo le
pertenecen a él.

### `src/lib/`

Contiene lógica reutilizable que no representa una parte visual de la interfaz. Aquí pueden
vivir utilidades, validadores, formateadores o, cuando exista un backend, la configuración de
un cliente HTTP.

`lib` no es equivalente a `components`:

- `components` contiene interfaz reutilizable.
- `lib` contiene funciones e infraestructura reutilizables.

Actualmente `src/lib/utils.ts` exporta `cn()`.

### `src/styles/`

Contiene la base global del sistema visual y la integración CSS-first de Tailwind:

- `index.css`: entrada global; importa Tailwind, el tema y los estilos base.
- `theme.css`: tokens de colores, fuentes y sombras; también configura el tema oscuro manual.
- `base.css`: estilos globales que complementan Tailwind Preflight.

Esta carpeta define la configuración inicial compartida. Cada componente o vista puede tener
su propio CSS cuando un estilo sea exclusivo o resulte más claro que una larga expresión de
utilidades Tailwind.

### `src/view/`

Contiene vistas completas asociadas a una URL. Una vista se encarga de componer componentes,
contenido y comportamiento para formar una pantalla. Debe reutilizar elementos de
`components` y lógica de `lib` cuando corresponda, en lugar de duplicarlos.

Las vistas actuales se encuentran dentro de `src/view/App/`.

### `public/`

Contiene archivos públicos que Vite copia sin transformar al bundle. La palabra `public` no
forma parte de la URL.

Por ejemplo:

```text
public/assets/web/icons.svg
```

se publica bajo:

```text
/Plantilla/assets/web/icons.svg
```

En archivos TSX, las rutas públicas deben respetar la base configurada:

```tsx
const baseUrl = import.meta.env.BASE_URL

<img src={`${baseUrl}assets/components/App/hero.png`} alt="" />
```

## Rutas con React Router 8

El proyecto utiliza `react-router` 8 y `HashRouter`. El hash permite cargar vistas en un
servidor estático o en IIS sin configurar reglas de reescritura.

Las rutas se registran en `src/main.tsx`:

```tsx
import { HashRouter, Route, Routes } from 'react-router'

;<HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Prueba" element={<Prueba />} />
  </Routes>
</HashRouter>
```

Las direcciones resultantes incluyen `#`:

```text
http://localhost:5173/Plantilla/#/
http://localhost:5173/Plantilla/#/Prueba
```

Para nuevas rutas se recomienda utilizar nombres en minúsculas, por ejemplo `/diplomas` o
`/contacto`.

La navegación interna debe usar `Link`:

```tsx
import { Link } from 'react-router'

;<Link to="/diplomas">Ver diplomas</Link>
```

Los enlaces hacia otros sitios continúan utilizando `<a>`.

## Tailwind CSS 4

Tailwind se integra mediante `@tailwindcss/vite` en `vite.config.ts` y se carga desde:

```css
@import 'tailwindcss';
```

La configuración es CSS-first. Los tokens se declaran en `src/styles/theme.css` mediante
`@theme`, sin un archivo `tailwind.config.js`:

```css
@theme {
  --color-background: var(--app-background);
  --color-heading: var(--app-heading);
  --color-accent: var(--app-accent);
}
```

Tailwind genera utilidades semánticas a partir de esos tokens:

```tsx
<section className="bg-background text-heading">
  <button className="bg-accent">Continuar</button>
</section>
```

El tema oscuro se controla añadiendo `.dark` a `<html>`. La variante personalizada hace que
las utilidades `dark:*` respondan a esa clase:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

## Utilidad `cn()`

`cn()` combina `clsx` y `tailwind-merge`:

- `clsx` construye clases condicionales.
- `tailwind-merge` elimina utilidades de Tailwind que entran en conflicto y conserva la última.

La implementación vive en `src/lib/utils.ts`:

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Ejemplo de componente reutilizable:

```tsx
import { cn } from '../../lib/utils'

function Button({ className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button className={cn('rounded-md bg-accent px-4 py-2 text-white', className)} {...props} />
  )
}
```

Si se utiliza así:

```tsx
<Button className="bg-red-500 px-8">Eliminar</Button>
```

`bg-red-500` sustituye a `bg-accent` y `px-8` sustituye a `px-4`, porque las clases recibidas
aparecen al final de `cn()`.

## React Compiler y memoización manual

React Compiler no está activado en esta plantilla. Esto permite mantener explícitas las
decisiones de memoización y utilizar manualmente las herramientas de React cuando exista una
necesidad comprobada:

- `useMemo` conserva un resultado calculado mientras no cambien sus dependencias.
- `useCallback` conserva la identidad de una función mientras no cambien sus dependencias.
- `React.memo` puede evitar que un componente se renderice de nuevo cuando sus props no cambian.

Estas herramientas son optimizaciones, no requisitos para cada componente. Deben utilizarse
cuando eviten trabajo relevante, mantengan una referencia estable necesaria o solucionen un
problema observado mediante medición. Añadirlas indiscriminadamente también aumenta la
complejidad del código.

## Bundle de producción

El comando:

```bash
npm run build
```

ejecuta:

```text
tsc -b && vite build
```

Primero TypeScript comprueba el proyecto y después Vite genera el bundle dentro de
`Plantilla/`.

La salida se organiza de esta manera:

```text
Plantilla/
├── index.html
├── js-css/
│   ├── index-[hash].js
│   └── index-[hash].css
└── assets/
    ├── components/
    ├── web/
    ├── images/
    ├── fonts/
    └── otros/
```

- `index.html`: documento que carga la aplicación compilada.
- `js-css/`: entrada JavaScript, chunks y CSS procesado.
- `assets/images/`: imágenes importadas desde el código y procesadas por Vite.
- `assets/fonts/`: fuentes importadas y procesadas.
- `assets/otros/`: otros recursos procesados por Rollup.
- `assets/components/` y `assets/web/`: estructura copiada desde `public/assets/`.

Vite solo crea carpetas como `fonts/` u `otros/` cuando el proyecto contiene recursos de esos
tipos. Los nombres con `[hash]` permiten invalidar la caché cuando cambia un archivo.

`Plantilla/` es contenido generado: no debe editarse manualmente y está ignorado por Git y
Prettier.

### Configuración de `vite.config.ts`

Los puntos principales son:

```ts
export default defineConfig({
  base: '/Plantilla/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'Plantilla',
  },
})
```

- `base`: prefijo público de las URLs. Corresponde a `/Plantilla/` cuando la aplicación se
  publica en `http://servidor/Plantilla/`.
- `outDir`: carpeta física donde Vite escribe el bundle.
- `entryFileNames`: ubicación y nombre de la entrada JavaScript.
- `chunkFileNames`: ubicación y nombre de fragmentos JavaScript adicionales.
- `assetFileNames`: separa CSS, imágenes, fuentes y otros recursos procesados.

`base` y `outDir` cumplen funciones diferentes aunque actualmente utilicen el mismo nombre:

```text
base   = dirección pública en el navegador
outDir = carpeta física generada por Vite
```

Si el contenido de `Plantilla/` se publica directamente en la raíz de un dominio, `base` debe
cambiar a `/`.

### GitHub Pages

El repositorio remoto se llama `plantillaReactTypescript2026`, por lo que su dirección
predeterminada de GitHub Pages utiliza esta base pública:

```text
/plantillaReactTypescript2026/
```

El comando específico para generar ese bundle es:

```bash
npm run build:github
```

Este script ejecuta:

```text
tsc -b && vite build --base=/plantillaReactTypescript2026/
```

La opción `--base` del comando reemplaza temporalmente el valor `/Plantilla/` de
`vite.config.ts`. La salida física continúa generándose dentro de `Plantilla/`, pero sus URLs
quedan preparadas para publicarse en:

```text
https://jerssonarleyosma.github.io/plantillaReactTypescript2026/
```

Como el proyecto utiliza `HashRouter`, una vista se publica con una dirección como:

```text
https://jerssonarleyosma.github.io/plantillaReactTypescript2026/#/Prueba
```

Si cambia el nombre del repositorio, también debe actualizarse la opción `--base` del script
`build:github` en `package.json`.

## Formato compartido

### `.gitignore`

El archivo `.gitignore` se generó con
[gitignore.io](https://www.toptal.com/developers/gitignore) utilizando las plantillas
`Windows`, `Linux`, `macOS` y `Node`.

Las primeras tres plantillas evitan subir archivos innecesarios creados por los diferentes
sistemas operativos. La plantilla de Node ignora, entre otros elementos, la carpeta
`node_modules`, mencionada en la sección de instalación.

`node_modules` puede ser muy grande y no debe almacenarse en Git. Las dependencias ya están
declaradas en `package.json` y bloqueadas en `package-lock.json`, por lo que otro desarrollador
puede recuperarlas con `npm install`.

El proyecto añade `/Plantilla/` a las exclusiones porque contiene el bundle generado.

### `.editorconfig`

El archivo `.editorconfig` comparte reglas básicas de formato entre editores compatibles. En
este proyecto configura, entre otras cosas:

- Codificación UTF-8.
- Finales de línea `LF`.
- Indentación con espacios.
- Dos espacios por nivel de indentación.
- Eliminación de espacios sobrantes al final de las líneas.
- Un salto de línea al final de cada archivo.

Visual Studio Code puede respetar estas reglas cuando cuenta con soporte para EditorConfig mas sin embargo instalar esta extensión para vscode [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).

### Prettier

Prettier aplica un formato reproducible independientemente del editor. La configuración se
encuentra en `prettier.config.js` y establece:

- Dos espacios de indentación.
- Comillas simples en JavaScript y TypeScript.
- Ausencia de punto y coma cuando no sea necesario.
- Comas finales compatibles con el lenguaje.
- Líneas de hasta 100 caracteres.
- Finales de línea `LF`.

Para corregir el formato:

```bash
npm run format
```

Para comprobarlo sin modificar archivos:

```bash
npm run format:check
```

`.prettierignore` evita formatear dependencias, bundles, el lockfile y los SVG públicos:

```text
node_modules/
Plantilla/
dist/
public/**/*.svg
package-lock.json
```

## Cómo se creó esta plantilla

Estos pasos permiten reproducir la base tecnológica desde cero:

1. Crear un proyecto Vite con React y TypeScript:

   ```bash
   npm create vite@latest nombre-proyecto -- --template react-ts
   cd nombre-proyecto
   npm install
   ```

2. Instalar Tailwind CSS 4 y su plugin de Vite:

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

3. Añadir `tailwindcss()` a `vite.config.ts` e importar Tailwind desde el CSS global:

   ```css
   @import 'tailwindcss';
   ```

4. Instalar las utilidades utilizadas por `cn()`:

   ```bash
   npm install clsx tailwind-merge
   ```

5. Instalar React Router 8:

   ```bash
   npm install react-router@8
   ```

6. Registrar `HashRouter`, las vistas y sus rutas en `src/main.tsx`.

7. Instalar Prettier como herramienta de desarrollo:

   ```bash
   npm install --save-dev prettier
   ```

8. Personalizar `vite.config.ts` para usar `/Plantilla/` como base pública y `Plantilla/` como
   carpeta del bundle.

9. Mantener React Compiler sin configurar para controlar manualmente las decisiones de
   memoización cuando sean necesarias.
