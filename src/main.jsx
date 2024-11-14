import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot, } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Redux/Store.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
    </Provider>
  </StrictMode>,
)