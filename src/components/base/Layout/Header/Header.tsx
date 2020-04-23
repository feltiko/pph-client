import React from 'react';
import { Layout } from 'antd';

import Logotype from '../../../common/Logotype';
import Navigation from '../../../common/Navigation';

import styles from './styles';

const { Header: AntdHeader } = Layout;

export default function Header() {
  return (
    <AntdHeader className={styles.header}>
      <Logotype />

      <Navigation />
    </AntdHeader>
  );
}
