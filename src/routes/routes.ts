import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;
interface IRoute {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(
  () => import(/*webpackChunkName:"Lazypage1"*/ '../01-lazyload/LazyPage1')
);
const Lazy2 = lazy(
  () => import(/*webpackChunkName:"Lazypage2"*/ '../01-lazyload/LazyPage2')
);
const Lazy3 = lazy(
  () => import(/*webpackChunkName:"Lazypage3"*/ '../01-lazyload/LazyPage3')
);

export const routes: IRoute[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazu-1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazu-2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazu-3',
  },
];
