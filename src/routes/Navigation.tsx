import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';

export default function Navigation() {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            {routes.map(({ to, name }) => {
              return (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}
          <Route
            path='/*'
            element={<Navigate to={routes[0].path} replace></Navigate>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
