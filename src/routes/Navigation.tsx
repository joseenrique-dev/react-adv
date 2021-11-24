import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import { LazyPage1 } from '../01-lazyload/LazyPage1';
import { LazyPage2 } from '../01-lazyload/LazyPage2';
import { LazyPage3 } from '../01-lazyload/LazyPage3';
import logo from '../logo.svg';

export default function Navigation() {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink
                to='/lazy1'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/lazy2'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/lazy3'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='lazy1' element={<LazyPage1 />} />
          <Route path='lazy2' element={<LazyPage2 />} />
          <Route path='lazy3' element={<LazyPage3 />} />
          <Route
            path='/*'
            element={<Navigate to='/lazy1' replace></Navigate>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
