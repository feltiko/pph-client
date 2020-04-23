import React from 'react';
import { Space } from 'antd';

import ProductItem from './ProductItem';

export default function ProductList() {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Space>
  );
}
