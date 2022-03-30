import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Divider />
          <Title
            content='Pablo Silva Dev'
          />
          <Divider />
          <SubTitle
            content='Pablo Silva Dev'
          />
          <Divider />
          <Text 
            content='lorem ipsum'
          />
          <EmailInput
          />
          <PasswordInput
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
