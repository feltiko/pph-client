import React from 'react';
import { Space, List, Typography } from 'antd';

import ProductItem from './ProductItem';

import { Product } from '../../../api/types';

import styles from './styles';

const { Title } = Typography;

type ProductListType = {
  title: string;
  data: Product[] | undefined;
};

export default function ProductList({ title, data }: ProductListType) {
  return (
    <Space direction="vertical" size="large" className={styles.container}>
      {data && (
        <>
          <Title level={3}>{title}</Title>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(product) => <ProductItem key={product.id} product={product} />}
          />
        </>
      )}
    </Space>
  );
}
