import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes/routes';
import { loadFonts } from './src/constants/constants';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect, useCallback } from 'react';
SplashScreen.preventAutoHideAsync();

export default function App() {
 const [appIsReady, setAppIsReady] = useState(false);

 useEffect(() => {
  async function prepare() {
   try {
    await loadFonts();
   } catch (e) {
    console.warn(e);
   } finally {
    setAppIsReady(true);
   }
  }

  prepare();
 }, []);

 const onLayoutRootView = useCallback(async () => {
  if (appIsReady) {
   setTimeout(() => {
    SplashScreen.hideAsync();
   }, 1000);
  }
 }, [appIsReady]);

 if (!appIsReady) {
  return null;
 }

 return (
  <SafeAreaProvider onLayout={onLayoutRootView}>
   <Routes></Routes>
  </SafeAreaProvider>
 );
}
