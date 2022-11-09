import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from '../Navigation/Navigation';
import { Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      <div>
        <Toaster />
      </div>
    </div>
  );
};

export default AppBar;
