import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App'
import './index.css'

import { worker } from './api/server'

import { fetchUsers } from './features/users/usersSlice.js'

// Start our mock API server
worker.start({ onUnhandledRequest: 'bypass' })

store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
