import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import Store from './redux/store'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
