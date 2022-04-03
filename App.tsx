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
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  SafeAreaView
} from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/themes/theme';

import { SearchBar } from './src/components/Elements/SearchBar';
import { Switch } from './src/components/Elements/Switch';
import { Divider } from './src/components/Elements/Divider';
import { CardInfo } from './src/components/Elements/CardInfo';
import { CardImage } from './src/components/Elements/CardImage';
import { AlternativeButton } from './src/components/Elements/AlternativeButton';
import { FormButton } from './src/components/Forms/FormButton';
import { Button } from './src/components/Elements/Button';
import { Input } from './src/components/Forms/Input';
import { EmailInput } from './src/components/Forms/EmailInput';
import { PasswordInput } from './src/components/Forms/PasswordInput';
import { Title } from './src/components/Typography/Title';
import { SubTitle } from './src/components/Typography/SubTitle';
import { Text } from './src/components/Typography/Text';
import { Avatar } from './src/components/Elements/Avatar';
import {
  Calendar,
  DayProps,
  MarkedDateProps
} from './src/components/Elements/Calendar';
import { format } from 'date-fns';
import { getPlatformDate } from './src/components/Elements/Calendar/getPlatformDate';
import { generateInterval } from './src/components/Elements/Calendar/generateInterval';

import {UserHeader} from './src/components/Elements/UserHeader'
import { Header } from './src/components/Elements/Header';
import { BackButton } from './src/components/Elements/BackButton';


export default function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)



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
        <SafeAreaView style={styles.container}>
          <Header 
            title='Novo usuário'
            content='Cadastre-se rapidamente e obtenha acesso restrito.'
            showsBackButton
          />
          <BackButton
            onPress={() => {}}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_secondary,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
