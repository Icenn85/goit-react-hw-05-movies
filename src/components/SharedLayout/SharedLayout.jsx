import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
