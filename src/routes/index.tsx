import { createBrowserRouter } from 'react-router-dom'

// routes
// import MainRoutes from './MainRoutes'
import LoginRoutes from './AuthenticationRoutes'

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([LoginRoutes], {
  basename: '/',
})

export default router
