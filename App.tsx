/* eslint-disable react-native/no-inline-styles */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import useCachedResources from './src/hooks/useCachedResources';
import theme from './src/constants/Themes';
import Navigation from './src/navigation';

function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

export default function (): JSX.Element {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <ActivityIndicator />;
  }
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
