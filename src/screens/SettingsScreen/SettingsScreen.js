import Footer from '../../components/Footer/Footer';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function SettingsScreen({ navigation }) {
 return (
  <SafeAreaView>
   <Footer navigation={navigation} />
  </SafeAreaView>
 );
}

export default SettingsScreen;
