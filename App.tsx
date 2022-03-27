import { useState } from 'react'
import { useTheme } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import {
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold
} from '@expo-google-fonts/lato'

//import { Button } from './src/components/Forms/Button';
//import { Loading } from './src/components/Loading'
//import { Input } from './src/components/Forms/Input';
//import { PasswordInput } from './src/components/Forms/PasswordInput';

import { Title } from './src/components/Title';
import { theme } from './src/themes/theme';

export default function App() {


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

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Title
          content='Pablo Silva Dev'
        />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
