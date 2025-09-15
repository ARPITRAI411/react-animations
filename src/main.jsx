import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairsan from './Components/Common/Stairsan.jsx'
import NavContext from './Context/NavContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Stairsan>
      <NavContext>
          <App />
      </NavContext>
      </Stairsan>
    </BrowserRouter>
  </StrictMode>,
)
