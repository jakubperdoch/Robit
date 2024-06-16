import { useState, useEffect, useCallback } from 'react';
import { loadFonts } from '../../constants/constants.js';
import { Image, View, Text } from 'react-native';
import styles from './styles.js';

function SplashScreen({ navigation }) {
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

 useEffect(() => {
  if (appIsReady) {
   setTimeout(() => {
    navigation.navigate('Register');
   }, 2500);
  }
 }, [appIsReady]);

 if (!appIsReady) {
  return null;
 }

 return (
  <View style={styles.splashScreen}>
   <Image
    style={styles.splashScreen_animation}
    source={require('../../assets/images/robotArm-animated.gif')}
   />
   <Text style={styles.splashScreen_title}>Bobo</Text>
  </View>
 );
}

export default SplashScreen;
