import { View, TouchableOpacity } from 'react-native';
import HomeIcon from '../../assets/images/homeIcon.svg';
import SettingsIcon from '../../assets/images/settingsIcon.svg';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

function Footer({ navigation }) {
 const route = useRoute();

 return (
  <View style={styles.footer}>
   <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <HomeIcon
     width={25}
     height={25}
     style={
      route.name.startsWith('Home')
       ? { color: '#00A6FB' }
       : { color: '#67686D' }
     }
    />
   </TouchableOpacity>
   <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
    <SettingsIcon
     width={30}
     height={30}
     style={
      route.name.startsWith('Settings')
       ? { color: '#00A6FB' }
       : { color: '#67686D' }
     }
    />
   </TouchableOpacity>
  </View>
 );
}

export default Footer;
