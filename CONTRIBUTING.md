# Contribuir

Gracias por tu interés en mejorar esta plantilla. Lee `README.md` antes de modificar el
proyecto; allí se explican la instalación, la estructura, las rutas, los estilos y el bundle.

## Preparar el entorno

Necesitas Node.js 22.22 o superior y npm.

```bash
npm install
npm run dev
```

Crea una rama desde `main` con un nombre descriptivo:

```text
feature/nombre-funcionalidad
fix/descripcion-error
docs/descripcion-cambio
```

Mantén cada contribución enfocada en un solo objetivo.

## Organización del código

Respeta las responsabilidades actuales:

- `src/components/`: componentes visuales reutilizables.
- `src/lib/`: funciones y lógica reutilizable no visual.
- `src/styles/`: tema, tokens y estilos globales.
- `src/view/`: vistas asociadas a rutas.
- `public/`: recursos públicos copiados sin transformar.

No muevas código a `components` o `lib` hasta que sea realmente reutilizable. Las vistas deben
componer componentes existentes en lugar de duplicar su implementación.

## React y TypeScript

- Mantén cada componente enfocado en una responsabilidad.
- Define tipos para las propiedades públicas.
- No uses `useMemo`, `useCallback` o `React.memo` automáticamente; añádelos cuando exista una
  razón concreta.
- React Compiler no está habilitado. No lo actives sin discutir previamente el cambio.
- No introduzcas dependencias nuevas sin justificar su necesidad.
- Actualiza juntos `package.json` y `package-lock.json`.

## Tailwind y estilos

- Usa Tailwind para layout, espaciado y estilos sencillos.
- Define los tokens semánticos compartidos en `src/styles/theme.css`.
- Prefiere tokens como `text-heading`, `bg-background` y `border-border` frente a colores
  físicos repetidos.
- Usa `cn()` para clases condicionales y para resolver conflictos en componentes reutilizables.
- No añadas Normalize.css ni otro reset. `src/styles/base.css` ya complementa Tailwind
  Preflight con las decisiones globales del proyecto.
- Evita duplicar en `base.css` reglas que Tailwind Preflight ya proporciona.

### CSS complejo o híbrido

Si un componente requiere pseudo-elementos, `clip-path`, keyframes, animaciones o CSS que sería
difícil de leer como utilidades Tailwind, mantén ese CSS junto al componente o view:

```text
src/components/NotchedPanel/
├── NotchedPanel.tsx
└── NotchedPanel.module.css
```

El componente puede combinar un CSS Module con utilidades Tailwind:

```tsx
import styles from './NotchedPanel.module.css'

function NotchedPanel() {
  return <div className={`${styles.notchedPanel} bg-background text-heading`}>Contenido</div>
}
```

Que un componente sea reutilizable no convierte sus estilos en globales. El estilo se reutiliza
al importar el componente. Esta ubicación mantiene juntas su estructura, su comportamiento y
su presentación, y evita colisiones de nombres.

Aplica la misma regla a una vista: si el CSS solo pertenece a esa vista, colócalo junto a ella.

Antes de añadir una regla a `src/styles/`, comprueba que realmente afecte a toda la aplicación.
Discute el cambio cuando implique:

- Nuevos tokens compartidos en `theme.css`.
- Cambios tipográficos o de elementos globales en `base.css`.
- Una utilidad CSS genérica que no pertenezca a un componente o vista concretos.

No coloques en los estilos globales la implementación de un componente específico, como un
panel con notch animado. Crea el componente y conserva allí su CSS complejo.

## Rutas y recursos

- Registra las vistas en `src/main.tsx`.
- Usa rutas nuevas en minúsculas, por ejemplo `/diplomas`.
- Usa `Link` de `react-router` para la navegación interna.
- El proyecto utiliza `HashRouter`; las URLs internas incluyen `#`.
- Construye las rutas de `public/` con `import.meta.env.BASE_URL`.
- No escribas `/Plantilla/` manualmente dentro de componentes.

Ejemplo:

```tsx
const baseUrl = import.meta.env.BASE_URL

<img src={`${baseUrl}assets/imagen.png`} alt="" />
```

## Archivos generados

No edites ni subas estas carpetas:

```text
node_modules/
Plantilla/
dist/
```

`Plantilla/` se vuelve a generar mediante los comandos de build.

## Verificación obligatoria

Antes de enviar cambios ejecuta:

```bash
npm run format
npm run format:check
npm run lint
npm run build
```

Si modificas la publicación de GitHub Pages, ejecuta también:

```bash
npm run build:github
```

Actualmente no hay pruebas automatizadas configuradas. Si una contribución incorpora un runner
de pruebas, debe documentar cómo ejecutar la suite completa y una prueba específica.

## Pull requests

Cada pull request debe incluir:

- Una descripción clara del problema y de la solución.
- Los archivos o funcionalidades principales afectados.
- Pasos para comprobar el cambio.
- Capturas de pantalla cuando cambie la interfaz.
- Las dependencias nuevas y la razón para incorporarlas.
- Actualizaciones de documentación cuando cambie el uso o la configuración.

Evita mezclar refactorizaciones no relacionadas con el objetivo principal.

## Reportar errores

Al reportar un error incluye:

- Comportamiento esperado.
- Comportamiento observado.
- Pasos mínimos para reproducirlo.
- Versión de Node.js.
- Navegador y sistema operativo.
- Mensajes relevantes de la consola.
