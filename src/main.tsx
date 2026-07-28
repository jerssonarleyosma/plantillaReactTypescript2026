import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import './styles/index.css'
import App from './view/App/App.tsx'
import Prueba from './view/App/Prueba.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Prueba" element={<Prueba />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
