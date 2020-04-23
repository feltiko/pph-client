import React from 'react';
import { Space } from 'antd';

import { Link } from 'react-router-dom';

import styles from './styles';

import routes from '../../../routes';

export default function Navigation() {
  return (
    <Space size="middle">
      {routes.map(
        route =>
          route.navAvailable && (
            <Link className={styles.link} key={route.path} to={route.path}>
              {route.name}
            </Link>
          )
      )}
    </Space>
  );
}
