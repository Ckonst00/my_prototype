import { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
