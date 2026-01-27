import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const initialLoader = document.getElementById('app-initial-loader')
if (initialLoader) {
  const MIN_LOADER_MS = 5000
  window.setTimeout(() => {
    initialLoader.classList.add('app-loader--hide')
    window.setTimeout(() => {
      initialLoader.remove()
    }, 220)
  }, MIN_LOADER_MS)
}
