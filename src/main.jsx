import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "swiper/css"
import "swiper/css/pagination"
import reportWebVitals from './reportWebVitals';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
