import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

export default function Logotype() {
  return (
    <Link to="/" className={styles.logo}>
      PetPH
    </Link>
  );
}
