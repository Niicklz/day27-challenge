import React from 'react'
import ReactDOM from 'react-dom/client'


import { ToastApp } from './ToastApp.jsx'
import "./reset.min.css"
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastApp />
  </React.StrictMode>,
)
