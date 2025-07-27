import ShoppingHeader from './shoppingViewHeader';
import { Outlet } from 'react-router-dom';

function ShoppingViewLayout() {
  return (
      <div className="flex flex-col bg-white">
      <ShoppingHeader />
      <main> 
        <Outlet />
      </main>
        
      </div>
  );
}

export default ShoppingViewLayout;