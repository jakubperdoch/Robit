import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes/routes';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export default function App() {


 return (
  <SafeAreaProvider>
   <GluestackUIProvider config={config}>
    <Routes />
   </GluestackUIProvider>
  </SafeAreaProvider>
 );
}
