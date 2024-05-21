import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/GridStyles';

const GridComponent = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default GridComponent;
