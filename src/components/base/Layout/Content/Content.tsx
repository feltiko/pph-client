import React from 'react';
import { Row, Col } from 'antd';

import styles from './styles';

type Props = {
  children: React.ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <Row className={styles.main}>
      <Col span={20} offset={2}>
        {children}
      </Col>
    </Row>
  );
};

export default Content;
