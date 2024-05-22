import React from 'react';
import {Text} from 'react-native';
import {typography} from '../styles';

const Typography = ({variant, style, children, ...props}) => {
  const textStyle = typography[variant] || {};

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
