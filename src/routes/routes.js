import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import AboutUsScreen from '../screens/AboutUsScreen/AboutUsScreen';
import PrivacyScreen from '../screens/PrivacyScreen/PrivacyScreen';
import TermsScreen from '../screens/TermsScreen/TermsScreen';

function Routes() {
 const Stack = createNativeStackNavigator();

 const Reset = {
  dark: false,
  colors: {
   primary: 'rgb(255, 255, 255)',
   background: 'rgb(5, 25, 35)',
   card: 'rgb(255, 255, 255)',
   text: 'rgb(255, 255, 255)',
   border: 'rgb(255, 255, 255)',
   notification: 'rgb(255, 69, 58)',
  },
 };
 return (
  <NavigationContainer theme={Reset}>
   <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{ headerShown: false }}
   >
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Settings_AboutUs" component={AboutUsScreen} />
    <Stack.Screen name="Settings_PrivacyPolicy" component={PrivacyScreen} />
    <Stack.Screen name="Settings_TermsConditions" component={TermsScreen} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

export default Routes;
