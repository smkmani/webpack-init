import React from 'react'
// import Users from './components/Users'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quae.
      </h1>
      <Users /> */}
    </div>
  )
}

export default App
