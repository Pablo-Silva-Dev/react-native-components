import React, { useState } from 'react';
import { Image } from 'react-native'
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ThemeProvider } from 'styled-components';
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

import { FormButton } from './src/components/Forms/FormButton';
//import { Loading } from './src/components/Loading'
//import { Input } from './src/components/Forms/Input';
//import { PasswordInput } from './src/components/Forms/PasswordInput';
import { EmailInput } from './src/components/Forms/EmailInput'
import { Title } from './src/components/Typography/Title';
import { SubTitle } from './src/components/Typography/SubTitle';
import { Text } from './src/components/Typography/Text';
import { theme } from './src/themes/theme';
import { PasswordInput } from './src/components/Forms/PasswordInput';
import { Input } from './src/components/Forms/Input';
import { Divider } from './src/components/Elements/Divider';
import { AlternativeButton } from './src/components/Elements/AlternativeButton';
import { Button } from './src/components/Elements/Button';
import { ImageCarousel } from './src/components/Elements/ImageCarousel';


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
