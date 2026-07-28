import { useState } from 'react'
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle'

function App() {
  const appAssets = `${import.meta.env.BASE_URL}`
  const [count, setCount] = useState(0)

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-281 flex-col border-x border-border text-center">
      <ThemeToggle />

      <section className="flex grow flex-col items-center justify-center gap-4.5 px-5 pt-8 pb-6 lg:gap-6.25 lg:p-0">
        <div className="relative my-6 w-80 h-80 -z-1">
          <img
            src={`${appAssets}assets/components/App/hero.png`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <img
            src={`${appAssets}assets/components/App/react.svg`}
            className="absolute left-1/2 top-9/13 h-20 -translate-x-1/2 -translate-y-1/2 rotate-x-50"
            alt="React logo"
          />
          <img
            src={`${appAssets}assets/components/App/vite.svg`}
            className="absolute left-1/2 top-1/4 h-17 -translate-x-1/2 -translate-y-1/2 rotate-x-50"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="my-5 text-4xl font-medium tracking-[-1.68px] lg:my-8 lg:text-[56px]">
            Get started
          </h1>
          <p>
            Edit{' '}
            <code className="inline-flex rounded-sm bg-code px-2 py-1 font-mono text-[15px] leading-[1.35] text-heading">
              src/App.tsx
            </code>{' '}
            and save to test{' '}
            <code className="inline-flex rounded-sm bg-code px-2 py-1 font-mono text-[15px] leading-[1.35] text-heading">
              HMR
            </code>
          </p>
        </div>
        <button
          type="button"
          className="mb-6 inline-flex rounded-[5px] border-2 border-transparent bg-accent-soft px-2.5 py-1.25 font-mono text-[16px] text-accent transition-colors duration-300 hover:border-accent-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks" aria-hidden="true" />

      <section className="flex flex-col border-t border-border text-center lg:flex-row lg:text-left">
        <div className="flex-1 border-b border-border px-5 py-6 lg:border-r lg:border-b-0 lg:p-8">
          <svg className="mb-4 size-5.5" role="presentation" aria-hidden="true">
            <use href={`${appAssets}assets/web/icons.svg#documentation-icon`}></use>
          </svg>
          <h2 className="mb-2 text-xl font-medium leading-[1.18] tracking-[-0.24px] lg:text-2xl">
            Documentation
          </h2>
          <p>Your questions, answered</p>
          <ul className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0 lg:mt-8 lg:flex-nowrap lg:justify-start">
            <li className="flex-[1_1_calc(50%-8px)] lg:flex-none">
              <a
                className="flex w-full items-center justify-center gap-2 rounded-md bg-social px-3 py-1.5 text-[16px] text-heading no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
                href="https://vite.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="h-4.5" src={`${appAssets}assets/components/App/vite.svg`} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="flex-[1_1_calc(50%-8px)] lg:flex-none">
              <a
                className="flex w-full items-center justify-center gap-2 rounded-md bg-social px-3 py-1.5 text-[16px] text-heading no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="size-4.5 dark dark:brightness-200"
                  src={`${appAssets}assets/components/App/react.svg`}
                  alt=""
                />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-5 py-6 lg:p-8">
          <svg className="mb-4 size-5.5 text-accent" role="presentation" aria-hidden="true">
            <use href={`${appAssets}assets/web/icons.svg#social-icon`}></use>
          </svg>
          <h2 className="mb-2 text-xl font-medium leading-[1.18] tracking-[-0.24px] lg:text-2xl">
            Connect with us
          </h2>
          <p>Join the Vite community</p>
          <ul className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0 lg:mt-8 lg:flex-nowrap lg:justify-start">
            <li className="flex-[1_1_calc(50%-8px)] lg:flex-none">
              <a
                className="flex w-full items-center justify-center gap-2 rounded-md bg-social px-3 py-1.5 text-[16px] text-heading no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
                href="https://github.com/vitejs/vite"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="size-4.5 dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={`${appAssets}assets/web/icons.svg#github-icon`}></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="flex-[1_1_calc(50%-8px)] lg:flex-none">
              <a
                className="flex w-full items-center justify-center gap-2 rounded-md bg-social px-3 py-1.5 text-[16px] text-heading no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
                href="https://chat.vite.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="size-4.5 dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={`${appAssets}assets/web/icons.svg#discord-icon`}></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="flex-[1_1_calc(50%-8px)] lg:flex-none">
              <a
                className="flex w-full items-center justify-center gap-2 rounded-md bg-social px-3 py-1.5 text-[16px] text-heading no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
                href="https://x.com/vite_js"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="size-4.5 dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={`${appAssets}assets/web/icons.svg#x-icon`}></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="flex-[1_1_calc(50%-8px)] lg:flex-none">
              <a
                className="flex w-full items-center justify-center gap-2 rounded-md bg-social px-3 py-1.5 text-[16px] text-heading no-underline transition-shadow duration-300 hover:shadow-card lg:w-auto lg:justify-start"
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="size-4.5 dark:invert dark:brightness-200"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={`${appAssets}assets/web/icons.svg#bluesky-icon`}></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks" aria-hidden="true" />
      <div className="h-12 border-t border-border lg:h-22" aria-hidden="true" />
    </main>
  )
}

export default App
