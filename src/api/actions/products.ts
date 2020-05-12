import { Action } from 'react-fetching-library';

import { Product } from '../types';

export const getProducts: Action<Product[]> = {
  method: 'GET',
  endpoint: '/products',
};

export const getProduct: Action<Product> = {
  method: 'GET',
  endpoint: '/product/1',
};

export const addProduct: Action<Product> = {
  method: 'POST',
  endpoint: '/product',
  body: {},
};

export const updateProduct: Action<Product> = {
  method: 'PUT',
  endpoint: '/product/:id',
  body: {},
};

export const removeProduct: Action<Product> = {
  method: 'DELETE',
  endpoint: '/product/:id',
};
