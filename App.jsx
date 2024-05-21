import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Button, Text} from 'react-native';
import {ThemeProvider} from './src/styles/themeProvider';
import {lightTheme} from './src/styles/themes/light';
import {darkTheme} from './src/styles/themes/dark';
import typography from './src/styles/typography';
import GridComponent from './src/components/grid/GridComponent';
import GridColumn from './src/components/grid/GridColumn';
import Card from './src/components/Card';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider
      value={{theme: isDarkTheme ? darkTheme : lightTheme, toggleTheme}}>
      <SafeAreaView style={styles.container}>
        <Button title="Toggle Theme" onPress={toggleTheme} />
        <GridComponent>
          <GridColumn span="fullWidth">
            <Text style={[typography.heading1]}>Heading 1</Text>
            <Card
              company="Google"
              position="Software Engineer"
              location="Mountain View, CA"
              salary="$120k - $150k"
              logo="https://example.com/logo-google.png"
            />
          </GridColumn>
          <GridColumn span={6}>
            <Card
              company="Facebook"
              position="Product Manager"
              location="Menlo Park, CA"
              salary="$110k - $140k"
              logo="https://example.com/logo-facebook.png"
            />
          </GridColumn>
          <GridColumn span={4}>
            <Button title="Apply Now" onPress={() => alert('Button Pressed')} />
          </GridColumn>
          <GridColumn span={4}>
            <Button
              title="Learn More"
              onPress={() => alert('Learn More Pressed')}
            />
          </GridColumn>
        </GridComponent>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
});

export default App;
