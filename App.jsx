import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import {ThemeProvider, lightTheme, darkTheme} from './src/styles';
import {ShowCase} from './src/components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <GestureHandlerRootView>
      <ThemeProvider
        value={{theme: isDarkTheme ? darkTheme : lightTheme, toggleTheme}}>
        <SafeAreaView style={styles.container}>
          <Button title="Toggle Theme" onPress={toggleTheme} />
          <ShowCase />
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
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
