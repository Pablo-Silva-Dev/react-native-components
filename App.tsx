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
  ScrollView,
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

import { UserHeader } from './src/components/Elements/UserHeader'
import { Header } from './src/components/Elements/Header';
import { BackButton } from './src/components/Elements/BackButton';
import { ItemAction } from './src/components/Elements/ItemAction';
import { MiniProductCard } from './src/components/Elements/MiniProductCard';
import { ProductsSlider } from './src/components/Elements/ProductsSlider';
import { ProductCard } from './src/components/Elements/ProductCard';
import { ImageCarousel } from './src/components/Elements/ImageCarousel';
import { BackToTopButton } from './src/components/Elements/BackToTopButton';


export default function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)


  const images = [
    'https://images.unsplash.com/photo-1649596565849-82825152d99e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1649577291772-64fb5ae9e11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
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

  const prod = {
    title: 'Processador I5 10500 Cache 12MB',
    image: 'https://images0.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_m.jpg',
    priceOnMoney: 'R$ 1.100,00',
    priceOnCredit: '12 X de R$ 94,50'
  }

  return (
    <ThemeProvider theme={theme}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <Title
            content='Criando interfaces para apps mobile'
            style={{ margin: 12 }}
          />

          <ProductCard
          productTitle={prod.title}
          productImage={prod.image}
          productPriceOnMoney={prod.priceOnMoney}
          productPriceOnCreditCard={prod.priceOnCredit}
          />

          <View style={styles.miniContainer}>
            <MiniProductCard
            productTitle={prod.title}
            productImage={prod.image}
            productPriceOnMoney={prod.priceOnMoney}
            productPriceOnCreditCard={prod.priceOnCredit}
            />
            <MiniProductCard
            productTitle={prod.title}
            productImage={prod.image}
            productPriceOnMoney={prod.priceOnMoney}
            productPriceOnCreditCard={prod.priceOnCredit}
            />
          </View>
        <View
        >
        <ImageCarousel
              images={images}
              firstImageAction={() => console.log('ok1')}
              secondImageAction={() => console.log('ok2')}
              thirdImageAction={() => console.log('ok3')}
              fourthImageAction={() => console.log('ok4')}
              fivethImageAction={() => console.log('ok5')}
          />
        </View>
          <ItemAction
            content='Some'
            title='saddfsd'
            iconName='airplay'
            onPress={() => {}}
          />
          <ItemAction
            content='Some'
            title='saddfsd'
            iconName='airplay'
            onPress={() => {}}
          />
          <ItemAction
            content='Some'
            title='saddfsd'
            iconName='airplay'
            onPress={() => {}}
          />
          <ItemAction
            content='Some'
            title='saddfsd'
            iconName='airplay'
            onPress={() => {}}
          />
          <ItemAction
            content='Some'
            title='saddfsd'
            iconName='airplay'
            onPress={() => {}}
          />
          <ItemAction
            content='Some'
            title='saddfsd'
            iconName='airplay'
            onPress={() => {}}
          />
          <ItemAction
            content='Some'
            title='saddfsd'
            iconName='airplay'
            onPress={() => {}}
          />
            <BackToTopButton 
              onPress={() => {}}
            />
        </ScrollView>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_secondary,
    paddingTop: 40
  },
  miniContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.colors.background_secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12
  },
});
