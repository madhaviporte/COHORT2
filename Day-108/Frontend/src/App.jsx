import { RouterProvider } from 'react-router'
import AppRoutes from './AppRoutes'
import './style.scss'
import { Authprovider } from './features/auth/auth.context.jsx'

const App = () => {
  return (

 <Authprovider>
  <AppRoutes />
 </Authprovider>
   
  )
}

export default App
