import React from 'react';
import {useTheme} from '../styles';
import {Button, ScrollView, StyleSheet, Text} from 'react-native';
import {GridColumn, GridComponent} from './grid';
import Typography from './Typography';
import Card from './Card';
import AnimatedCard from './AnimatedCard';

const ShowCase = () => {
  const {theme} = useTheme();

  return (
    <ScrollView>
      <GridComponent>
        <GridColumn span="fullWidth">
          <Card
            company="Google"
            position="Software Engineer"
            location="Mountain View, CA"
            salary="$120k - $150k"
            logo="https://placehold.co/600x400/png"
          />
        </GridColumn>
        <GridColumn span={5}>
          <Card
            company="Facebook"
            position="Product Manager"
            location="Menlo Park, CA"
            salary="$110k - $140k"
          />
        </GridColumn>
        <GridColumn span={6}>
          <Card
            company="Facebook"
            position="Product Manager"
            location="Menlo Park, CA"
            salary="$110k - $140k"
          />
        </GridColumn>
        <GridColumn span={4}>
          <Button title="Apply Now" onPress={() => alert('Button Pressed')} />
        </GridColumn>
        <GridColumn span="fullWidth">
          <Typography variant="heading1" style={{color: theme.colors.text}}>
            Heading 01
          </Typography>
          <Typography variant="heading2" style={{color: theme.colors.text}}>
            Heading 02
          </Typography>
          <Typography variant="paragraphL" style={{color: theme.colors.text}}>
            This is a paragraph.
          </Typography>
        </GridColumn>
        <GridColumn span="fullWidth">
          <AnimatedCard style={styles.card}>
            <Text>Card 1</Text>
          </AnimatedCard>
          <AnimatedCard style={styles.card}>
            <Text>Card 2</Text>
          </AnimatedCard>
          <AnimatedCard style={styles.card}>
            <Text>Card 3</Text>
          </AnimatedCard>
        </GridColumn>
        <GridColumn span={4}>
          <Button
            title="Learn More"
            onPress={() => alert('Learn More Pressed')}
          />
        </GridColumn>
      </GridComponent>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    // position: 'absolute',
  },
});

export default ShowCase;
