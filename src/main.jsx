import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar/NavBar.jsx'
import VideoSection from './components/Body/Video'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <NavBar />
  <VideoSection />
  </React.StrictMode>,
)
