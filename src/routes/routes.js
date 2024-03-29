import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

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
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
   >
    <Stack.Screen name="Home" component={HomeScreen} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

export default Routes;
