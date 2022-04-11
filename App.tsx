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
    'https://themes.kabum.com.br/conteudo/ads/splashline/771.jpg',
    'https://themes.kabum.com.br/conteudo/ads/splashline/789.jpg',

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
  const prods = [
    {
      title: 'Processador I5 10500 Cache 12MB',
      image: 'https://images0.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200167_m.jpg',
      priceOnMoney: 'R$ 1.100,00',
      priceOnCredit: 'Em até 12 X de R$ 94,50'
    },
    {
      title: 'Console Microsoft Xbox Series S, 512GB, Branco',
      image: 'https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_gg.jpg',
      priceOnMoney: 'R$ 2.399,99',
      priceOnCredit: 'Em até 12x de R$ 222,22 '
    },
    {
      title: 'Teclado Mecânico Gamer T-Dagger Bora, RGB, Switch Outemu Brown',
      image: 'https://images.kabum.com.br/produtos/fotos/107964/teclado-mecanico-gamer-t-dagger-bora-rgb-switch-outemu-brown-pt-t-tgk315-brown_1641414700_gg.jpg',
      priceOnMoney: 'R$ 199,00',
      priceOnCredit: 'Em até 9x de R$ 26,01 '
    },
    {
      title: 'Samsung Smart TV 43´´ UHD 4K 43AU7700, Processador Crystal 4K, Tela sem limites, Alexa Built In, Controle Único',
      image: 'https://images.kabum.com.br/produtos/fotos/154974/samsung-smart-tv-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-un43au7700gxzd_1617624901_gg.jpg',
      priceOnMoney: 'R$ 2.231,55',
      priceOnCredit: 'Em até 12x de R$ 195,75 '
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <ScrollView
          style={{
            marginTop: 40,
            marginBottom: 12,
            flex: 1
          }}
        >
          <ImageCarousel
            images={images}
          />
          <Title
            content='Ofertas recentes'
            style={{ margin: 12 }}
          />

          {prods.map(prod => (
            <ProductCard
              productTitle={prod.title}
              productImage={prod.image}
              productPriceOnMoney={prod.priceOnMoney}
              productPriceOnCreditCard={prod.priceOnCredit}
            />
          ))}
          <Title
            content='Produtos em destaque'
            style={{ margin: 12 }}
          />
          <ProductsSlider
          >
            {prods.map(prod => (
              <MiniProductCard
                productTitle={prod.title}
                productImage={prod.image}
                productPriceOnMoney={prod.priceOnMoney}
                productPriceOnCreditCard={prod.priceOnCredit}
              />
            ))}
          </ProductsSlider>
          <BackToTopButton
            onPress={() => { }}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
}

/* 
 */