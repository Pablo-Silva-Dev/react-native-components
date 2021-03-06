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
import React from 'react';
import {
  Keyboard, ScrollView, TouchableWithoutFeedback
} from 'react-native';
import { ThemeProvider } from 'styled-components';
import { AlternativeButton } from './src/components/Elements/AlternativeButton';
import { Button } from './src/components/Elements/Button';
import { CategoryItem } from './src/components/Elements/CategoryItem';
import { CategorySubItem } from './src/components/Elements/CategorySubItem';
import { DealTimingCard } from './src/components/Elements/DealTimingCard';
import { FavoriteProductCard } from './src/components/Elements/FavoriteProductCard';
import { PaymentCard } from './src/components/Elements/PaymentCard';
import { ProductDetailCard } from './src/components/Elements/ProductDetailCard';
import { ProductsSlider } from './src/components/Elements/ProductsSlider';
import { theme } from './src/themes/theme';


export default function App() {

  const images = [
    'https://images.kabum.com.br/produtos/fotos/166104/placa-de-video-zotac-nvidia-geforce-rtx-3060ti-twin-edge-lhr-8gb-14-0-gbps-gddr6-dlss-ray-tracing-zt-a30610e-10mlhr_1623326525_gg.jpg',
    'https://images.kabum.com.br/produtos/fotos/166104/placa-de-video-zotac-nvidia-geforce-rtx-3060ti-twin-edge-lhr-8gb-14-0-gbps-gddr6-dlss-ray-tracing-zt-a30610e-10mlhr_1623326523_gg.jpg',
    'https://images.kabum.com.br/produtos/fotos/166104/placa-de-video-zotac-nvidia-geforce-rtx-3060ti-twin-edge-lhr-8gb-14-0-gbps-gddr6-dlss-ray-tracing-zt-a30610e-10mlhr_1623326525_gg.jpg',
    'https://images.kabum.com.br/produtos/fotos/166104/placa-de-video-zotac-nvidia-geforce-rtx-3060ti-twin-edge-lhr-8gb-14-0-gbps-gddr6-dlss-ray-tracing-zt-a30610e-10mlhr_1623326523_gg.jpg',

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
      priceOnCredit: 'Em at?? 12 X de R$ 94,50'
    },
    {
      title: 'Console Microsoft Xbox Series S, 512GB, Branco',
      image: 'https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_gg.jpg',
      priceOnMoney: 'R$ 2.399,99',
      priceOnCredit: 'Em at?? 12x de R$ 222,22 '
    },
    {
      title: 'Teclado Mec??nico Gamer T-Dagger Bora, RGB, Switch Outemu Brown',
      image: 'https://images.kabum.com.br/produtos/fotos/107964/teclado-mecanico-gamer-t-dagger-bora-rgb-switch-outemu-brown-pt-t-tgk315-brown_1641414700_gg.jpg',
      priceOnMoney: 'R$ 199,00',
      priceOnCredit: 'Em at?? 9x de R$ 26,01 '
    },
    {
      title: 'Samsung Smart TV 43???? UHD 4K 43AU7700, Processador Crystal 4K, Tela sem limites, Alexa Built In, Controle ??nico',
      image: 'https://images.kabum.com.br/produtos/fotos/154974/samsung-smart-tv-43-uhd-4k-43au7700-processador-crystal-4k-tela-sem-limites-alexa-built-in-controle-unico-un43au7700gxzd_1617624901_gg.jpg',
      priceOnMoney: 'R$ 2.231,55',
      priceOnCredit: 'Em at?? 12x de R$ 195,75 '
    }
  ]

  return (
    <ThemeProvider theme={theme}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={{
          flex: 1,
          alignItems: 'center'

        }}
      >
        <ScrollView
          style={{
            marginTop: 40,
            marginBottom: 12,
            flex: 1,

          }}
        >
          <ProductDetailCard
            productImages={images}
            productTitle={prods[3].title}
          />
          <DealTimingCard
            quantity={12}
            dealHours={1}
          />
          <PaymentCard
            priceOnMoney={500}
            priceOnCredit={520}
          />
      <Button
        title='Finalizar compra'
      />
        </ScrollView>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  )
}
