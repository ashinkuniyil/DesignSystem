# DesignSystem

This repository contains a comprehensive design system implemented in React Native. It includes themes, layout configuration, typography, spacing, elevation, border radius, illustrations, iconography, and reusable components. The design system is designed to be efficient, configurable, and scalable.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
  - [Themes](#themes)
  - [Typography](#typography)
  - [Spacing](#spacing)
  - [Elevation](#elevation)
  - [Border Radius](#border-radius)
  - [Layout](#layout)
  - [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ashinkuniyil/DesignSystem.git
   cd DesignSystemApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install iOS dependencies (Mac only):
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Usage

1. Run the project on iOS:
   ```bash
   npx react-native run-ios
   ```

2. Run the project on Android:
   ```bash
   npx react-native run-android
   ```

## Features

### Themes

The design system supports light and dark themes. Themes are defined in the `src/styles/themes` directory.

- **Light Theme** (`light.js`)
- **Dark Theme** (`dark.js`)

### Typography

Typography settings are defined in `src/styles/typography.js`. This includes font sizes, weights, and styles for headers, subheaders, body text, and captions.

### Spacing

Spacing settings are defined in `src/styles/spacing.js`. This includes predefined spacing values for consistency across the application.

### Elevation

Elevation styles are defined in `src/styles/elevation.js`. This includes low, medium, and high elevation styles for shadows.

### Border Radius

Border radius settings are defined in `src/styles/borderRadius.js`. This includes small, medium, large, and extra-large radius values.

### Layout

A configurable 4-column layout system is implemented in `src/styles/LayoutStyles.js`. It handles gutter width, column width, and horizontal padding for centered alignment.

### Components

Reusable UI components are implemented to adhere to the design system. These components include:
- **Button** (`src/components/Button.js`)
- **Card** (`src/components/Card.js`)
- **GridComponent** (`src/components/GridComponent.js`)

#### Example Usage

**App.js:**
```javascript
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button as RNButton } from 'react-native';
import { ThemeProvider } from './src/styles/themeProvider';
import GridComponent from './src/components/GridComponent';
import Card from './src/components/Card';
import Button from './src/components/Button';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <RNButton title="Toggle Theme" onPress={toggleTheme} />
        <GridComponent>
          <Card 
            company="Google" 
            position="Software Engineer" 
            location="Mountain View, CA" 
            salary="$120k - $150k" 
            logo="https://example.com/logo-google.png" 
          />
          <Card 
            company="Facebook" 
            position="Product Manager" 
            location="Menlo Park, CA" 
            salary="$110k - $140k" 
            logo="https://example.com/logo-facebook.png" 
          />
          <Button title="Apply Now" onPress={() => alert('Button Pressed')} />
          <Button title="Learn More" onPress={() => alert('Learn More Pressed')} />
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
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
