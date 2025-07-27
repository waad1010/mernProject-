import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from './components/ui/auth/layout';
import AuthLogin from './pages/auth /login';
import AuthRegister from './pages/auth /register';
import AdminLayout from './components/ui/admin-view/layout';
import AdminDashboard from './pages/admin-view/dashboard';
import AdminProducts from './pages/admin-view/products';
import AdminOrders from './pages/admin-view/orders';
import AdminFeatures from './pages/admin-view/features';
import ShoppingViewLayout from './components/ui/shopping-view/shoppingViewLayout';
import NotFound from './pages/notFound';
import ShoppingViewAccount from './pages/shopping-view/account';
import ShoppingViewCheckout from './pages/shopping-view/checkout';
import ShoppingViewListing from './pages/shopping-view/listing';
import ShoppingViewHome from './pages/shopping-view/home';
import CheckAuth from './components/common/checkAuthentication';
import UnauthPage from './pages/unauth-page';

function App() {
  const isAuthenticated = true;
  const user = {
    name: "Sangam",
    role: "user"
  };

  return (

    <div className="flex flex-col overflow-hidden bg-white text-foreground">
      {/* <h1> Welcome to Waad's Ecommerce System *Header*</h1>  */}
      <Routes>
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        } >
          <Route path='login' element={<AuthLogin />} />
          <Route path='register' element={<AuthRegister />} />
        </Route>

        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        } >
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='features' element={<AdminFeatures />} />
        </Route>


        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingViewLayout />
          </CheckAuth>
        } >
          <Route path='account' element={<ShoppingViewAccount />} />
          <Route path="checkout" element={<ShoppingViewCheckout />} />
          <Route path="listing" element={<ShoppingViewListing />} />
          <Route path="home" element={<ShoppingViewHome />} />

        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnauthPage />} />

      </Routes>
    </div>

  );
}

export default App;
