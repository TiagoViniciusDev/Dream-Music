import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { DreamMusicProvider } from './context/DreamMusicApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DreamMusicProvider>
      <App />
    </DreamMusicProvider>
  </React.StrictMode>,
)
