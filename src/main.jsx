import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' //This component enables all components in the application to access the Redux store.
import store from './store.js' //This store holds the application's state, using the reducer defined in the CartSlice.jsx file.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* This allows all components in the app to access and interact with the global state managed by Redux. */}
    <App />
    </Provider>
  </React.StrictMode>,
)
