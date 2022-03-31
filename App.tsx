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


export default function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

/*   const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]
 */
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

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <SearchBar />
     
          <CardImage 
            title='Title'
            image='https://source.unsplash.com/1024x768/?nature'
          />
          <Input 
            iconName='credit-card'
          />
          <PasswordInput />
          <EmailInput />
          <AlternativeButton
            title='Cancel'
          />
          <FormButton 
            title='Confirm'
            submit={testButtons}
          />
          <Title
            content='Pablo Silva Dev'
          />
          <SubTitle
            content='Pablo Silva Dev'
          />
          <Text
            content='Pablo Silva Dev'
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
