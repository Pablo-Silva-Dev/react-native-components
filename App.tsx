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
  View
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


export default function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [people, setPeople] = useState('')
  const [foundedPeoples, setFoundedPeoples] = useState([''])


  /*   const images = [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree",
    ]
   */

    const profileImg = 'https://avatars.githubusercontent.com/u/54117323?s=400&u=e5bf2f12d9b4b8e8c29214efbfa17e4d7f3fd22c&v=4'

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
        <Avatar 
          avatarUrl={profileImg}
        />
    
        </View>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
