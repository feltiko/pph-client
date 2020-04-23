import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Avatar, Typography, Tag, Button } from 'antd';
import { AppstoreOutlined, CaretUpOutlined } from '@ant-design/icons';

import styles from './styles';

const { Text } = Typography;

export default function ProductItem() {
  const [rateIsActive, setRateIsActive] = useState(false);
  const [rate, setRate] = useState(13);

  return (
    <Row gutter={16}>
      <Col flex="72px">
        <Link to="/product/product-name">
          <Avatar shape="square" size={72}>
            <AppstoreOutlined />
          </Avatar>
        </Link>
      </Col>
      <Col flex="auto">
        <div className={styles.body}>
          <div>
            <Link to="/product/product-name">
              <Text strong>Project Name</Text>
              <br />
              <Text style={{ maxWidth: '100%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Link>
          </div>
          <div>
            <Tag>
              <Link to="/category/productivity">Productivity</Link>
            </Tag>
          </div>
        </div>
      </Col>
      <Col
        flex="72px"
        className={styles.rateButtonWrapper}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Button
          type={rateIsActive ? 'primary' : 'dashed'}
          icon={<CaretUpOutlined />}
          onClick={() => {
            if (!rateIsActive) {
              setRateIsActive(true);
              setRate(rate + 1);
            }
          }}
        >
          {rate}
        </Button>
      </Col>
    </Row>
  );
}
