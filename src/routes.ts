import Homepage from './pages/Homepage';
import Category from './pages/Category';
import Product from './pages/Product';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

export const navigation = {
  anonymous: [
    {
      name: 'Browse',
      path: '/',
    },
    {
      name: 'Login',
      path: '/auth/login',
    },
    {
      name: 'Register',
      path: '/auth/register',
    },
  ],
  loggedIn: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Profile',
      path: '/profile/:username',
    },
    {
      name: 'Add product +',
      path: '/product/add',
    },
  ],
};

export const routes = [
  {
    name: 'Category',
    path: '/category/:id',
    component: Category,
  },
  {
    name: 'Product',
    path: '/product/:id',
    component: Product,
  },
  {
    name: 'Login',
    path: '/auth/login',
    component: Login,
  },
  {
    name: 'Register',
    path: '/auth/register',
    component: Register,
  },
  {
    name: 'Home',
    path: '/',
    component: Homepage,
  },
];

export const protectedRoutes = [
  {
    name: 'Add project +',
    path: '/product/add',
    component: Product,
  },
];
