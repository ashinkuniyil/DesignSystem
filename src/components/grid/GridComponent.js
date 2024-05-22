import React from 'react';
import {View} from 'react-native';
import {GridStyles as styles} from '../../styles';

const GridComponent = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default GridComponent;
