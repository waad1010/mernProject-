import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import AuthLayout from './components/ui/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'

function App () {
  return (
    <div className="flex flex-col overflow-hidden bg-white text-foreground">
      {/* Header component can be added here if needed */}
      <h1> Welcome to Waad's Ecommerce System *Header*</h1>
      <Routes>
        <Route path='/auth' element={<AuthLayout />} >
            <Route path='login' element={<AuthLogin />} />
            <Route path='register' element={<AuthRegister />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
