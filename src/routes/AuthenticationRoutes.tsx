import MinimalLayout from '../layout/MinimalLayout'
import AuthLogin from '../views/login/AuthLogin'

AuthLogin

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/',
      element: <AuthLogin />,
    },
    // {
    //   path: '/pages/register/register3',
    //   element: <AuthRegister3 />,
    // },
  ],
}

export default AuthenticationRoutes
