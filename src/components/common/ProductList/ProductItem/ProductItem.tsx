import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Avatar, Typography, Tag, Button } from 'antd';
import { AppstoreOutlined, CaretUpOutlined } from '@ant-design/icons';

import { Product } from '../../../../api/types';

import styles from './styles';

const { Text } = Typography;

export type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  const [rateIsActive, setRateIsActive] = useState(false);
  const [rate, setRate] = useState(13);
  const { avatar, title, short_description: shortDescription, category } = product;

  return (
    <Row gutter={16}>
      <Col flex="72px">
        <Link to="/product/product-name">
          <Avatar shape="square" size={72}>
            {avatar ? (
              <img
                className={styles.avatar}
                src={`http://localhost:1337${avatar.formats.thumbnail.url}`}
                alt={`${title} logotype`}
              />
            ) : (
              <AppstoreOutlined />
            )}
          </Avatar>
        </Link>
      </Col>
      <Col flex="auto">
        <div className={styles.body}>
          <div>
            <Link to="/product/product-name">
              <Text strong>{title}</Text>
              <br />
              <Text style={{ maxWidth: '100%' }}>{shortDescription}</Text>
            </Link>
          </div>
          <div>
            <Tag>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
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
