import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
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

//import { Button } from './src/components/Forms/Button';
//import { Loading } from './src/components/Loading'
//import { Input } from './src/components/Forms/Input';
//import { PasswordInput } from './src/components/Forms/PasswordInput';
import { Title } from './src/components/Typography/Title';
import { SubTitle } from './src/components/Typography/SubTitle';
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
        <SubTitle
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
