import React from 'react';
import { Typography } from 'antd';

import { Header, Footer, Content } from '../../components/base/Layout';

import ProductList from '../../components/common/ProductList';

const { Title } = Typography;

export default function Homepage() {
  return (
    <div>
      <Header />
      <Content>
        <Title level={3}>Today</Title>
        <ProductList />
      </Content>
      <Footer />
    </div>
  );
}
