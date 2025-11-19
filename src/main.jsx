import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'

import './index.css'

// Component tree. built in component, not visual. Purpose is to identify potential problems
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*App^^is a component*/}
  </StrictMode>,
)
