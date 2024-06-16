import * as Fonts from 'expo-font';

export const loadFonts = async () => {
 await Fonts.loadAsync({
  'Mont-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
  'Mont-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  Tech: require('../assets/fonts/ShareTechMono-Regular.ttf'),
 });
};
