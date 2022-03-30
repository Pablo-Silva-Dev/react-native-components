import {
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold
} from '@expo-google-fonts/lato';
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { CardImage } from './src/components/Elements/CardImage';
import { CardInfo } from './src/components/Elements/CardInfo';
import { ImageCarousel } from './src/components/Elements/ImageCarousel';
import { Title } from './src/components/Typography/Title';
import { theme } from './src/themes/theme';



export default function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [isEnablaed, setIsEnabled] = useState(false)

  const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]

  const [fontLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold
  })

  if (!fontLoaded) {
    return (
      <AppLoading />
    )
  }

  async function testButtons() {
    setIsLoading(true)
    await setTimeout(() => {
      console.log('ok')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageCarousel
            images={images}
          />
        </View>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
