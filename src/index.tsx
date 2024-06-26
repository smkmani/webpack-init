import ReactDom from 'react-dom/client'
import App from './App'
import './globals.css'
import store from './store'
import { Provider } from 'react-redux'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
