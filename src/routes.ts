import Homepage from './pages/Homepage';
import Category from './pages/Category';
import Product from './pages/Product';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

export default [
  {
    name: 'Login',
    path: '/auth/login',
    isProtected: false,
    component: Login,
    navAvailable: true,
  },
  {
    name: 'Register',
    path: '/auth/register',
    isProtected: false,
    component: Register,
    navAvailable: true,
  },
  {
    name: 'Category',
    path: '/category/:id',
    isProtected: false,
    component: Category,
    navAvailable: false,
  },
  {
    name: 'Product',
    path: '/product/:id',
    isProtected: false,
    component: Product,
    navAvailable: false,
  },
  {
    name: 'Home',
    path: '/',
    isProtected: false,
    component: Homepage,
    navAvailable: true,
  },
];
