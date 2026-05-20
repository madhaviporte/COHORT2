import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/app.store.js'

console.log("AUTH API BASE:", import.meta.env.VITE_API_URL)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)

