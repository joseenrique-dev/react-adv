import { LazyPage1 } from '../01-lazyload/LazyPage1';
import { LazyPage2 } from '../01-lazyload/LazyPage2';
import { LazyPage3 } from '../01-lazyload/LazyPage3';

export interface IRoute {
  to: string;
  path: string;
  name: string;
  Component: () => JSX.Element;
}

export const routes: IRoute[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: LazyPage1,
    name: 'Lazu-1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: LazyPage2,
    name: 'Lazu-2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: LazyPage3,
    name: 'Lazu-3',
  },
];
