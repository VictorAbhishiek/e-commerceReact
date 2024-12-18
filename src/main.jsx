import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Cartprovider } from './context/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Cartprovider>
      <App />
    </Cartprovider> 
  </StrictMode>,
  </BrowserRouter> 
)
