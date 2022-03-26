import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button } from './src/components/Forms/Button';
import { theme } from './src/themes/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Button
          title='My First PSD component'
        />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
