import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/GridStyles';

const GridColumn = ({children, span = 1}) => {
  const columnStyle =
    span === 'fullWidth' ? styles.fullWidth : styles.getColumnSpan(span);

  return <View style={[styles.column, columnStyle]}>{children}</View>;
};

export default GridColumn;
