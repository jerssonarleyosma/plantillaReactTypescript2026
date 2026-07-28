import { useState } from 'react'
import type { Theme } from './types/Types'

function ThemeToggle() {
  const appAssets = `${import.meta.env.BASE_URL}`

  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(nextTheme)
    localStorage.setItem('theme', nextTheme)
    setTheme(nextTheme)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="fixed top-4 right-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-heading shadow-card transition-colors hover:bg-social focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:cursor-pointer"
      aria-label={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
      aria-pressed={isDark}
      onClick={toggleTheme}
      title={isDark ? 'Activar tema claro' : 'Activar tema oscuro'}
    >
      {isDark ? (
        <svg className="size-5 text-accent" role="button" aria-hidden="true">
          <use href={`${appAssets}assets/web/icons.svg#sun-icon`}></use>
        </svg>
      ) : (
        <svg className="size-5 text-heading" role="button" aria-hidden="true">
          <use href={`${appAssets}assets/web/icons.svg#middlemoon-icon`}></use>
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
