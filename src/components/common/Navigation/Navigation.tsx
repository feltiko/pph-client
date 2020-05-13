import React from 'react';
import { Space, Button } from 'antd';
import { useStoreon } from 'storeon/react';

import { Link } from 'react-router-dom';

import styles from './styles';

import { navigation } from '../../../routes';

import { State, Events } from '../../../store/structure';

export default function Navigation() {
  const { isLoggedIn, dispatch } = useStoreon<State, Events>('isLoggedIn');

  const navRoutes = isLoggedIn ? navigation.loggedIn : navigation.anonymous;

  const handleClickLogout = () => {
    dispatch('logout');
  };

  return (
    <Space size="middle">
      {navRoutes.map((route) => (
        <Link className={styles.link} key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}

      {isLoggedIn && (
        <Button type="link" onClick={handleClickLogout}>
          Logout
        </Button>
      )}
    </Space>
  );
}
