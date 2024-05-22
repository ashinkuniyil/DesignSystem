import {useState, useEffect} from 'react';
import * as Font from 'expo-font';

const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'NotoSans-Regular': require('../../assets/fonts/NotoSans-Regular.ttf'),
          'NotoSans-Bold': require('../../assets/fonts/NotoSans-Bold.ttf'),
          'NotoSans-Medium': require('../../assets/fonts/NotoSans-Medium.ttf'),
          'NotoSans-SemiBold': require('../../assets/fonts/NotoSans-SemiBold.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts', error);
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useCustomFonts;
