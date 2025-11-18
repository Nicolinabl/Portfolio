import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'
import { TestComponent } from './Components/Test.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*App^^is a component*/}
    <TestComponent />
  </StrictMode>,
)
