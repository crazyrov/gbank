import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux'
import store from './store.js';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <GoogleOAuthProvider clientId="15016664665-hdlqdluvlsrs862n0286kp4alqbktn00.apps.googleusercontent.com">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </div>
)
