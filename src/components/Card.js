import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useTheme, elevation, borderRadius} from '../styles';

const Card = ({company, position, location, salary, logo}) => {
  const {theme} = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.background,
          ...elevation.medium,
          borderRadius: borderRadius.medium,
        },
      ]}>
      <View style={styles.header}>
        {logo && <Image source={{uri: logo}} style={styles.logo} />}
        <View style={styles.headerText}>
          <Text style={[styles.company, {color: theme.colors.text}]}>
            {company}
          </Text>
          <Text style={[styles.position, {color: theme.colors.text}]}>
            {position}
          </Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={[styles.detailText, {color: theme.colors.text}]}>
          {location}
        </Text>
        <Text style={[styles.detailText, {color: theme.colors.text}]}>
          {salary}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  company: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 16,
  },
  details: {
    marginTop: 10,
  },
  detailText: {
    fontSize: 14,
  },
});

export default Card;
