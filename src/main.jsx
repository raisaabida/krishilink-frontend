import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from "./context/AuthContext";

// Tailwind / DaisyUI styles
import './index.css'


// AOS animations
import 'aos/dist/aos.css'
import AOS from 'aos'

// Initialize AOS
AOS.init({
  duration: 600,
  once: true,
  easing: "ease-out-cubic",
})


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthProvider>
 <App />
     </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
)


