import React from 'react';
import { useQuery } from 'react-fetching-library';
import { Spin, Result, Button } from 'antd';

import { Header, Footer, Content } from '../../components/base/Layout';
import ProductList from '../../components/common/ProductList';

import { getProducts } from '../../api/actions';

import styles from './styles';

export default function Homepage() {
  const { loading, payload, error, query } = useQuery(getProducts);

  return (
    <div>
      <Header />
      <Content>
        {error && (
          <Result
            status="error"
            title="Fetch failed"
            extra={[
              <Button type="primary" key="try-again" onClick={query}>
                Try again
              </Button>,
            ]}
          />
        )}

        {loading && (
          <div className={styles.loader}>
            <Spin />
          </div>
        )}

        {!loading && !error && <ProductList title="Today" data={payload} />}
      </Content>
      <Footer />
    </div>
  );
}
