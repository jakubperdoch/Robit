import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import PanelButton from '../../components/PanelButton/PanelButton';

function HomeScreen() {
 const controllersArray = [
  {
   image: require('../../assets/images/arrow-left.png'),
  },
  {
   image: require('../../assets/images/arrow-right.png'),
  },
  {
   image: require('../../assets/images/arrow-left.png'),
  },
  {
   image: require('../../assets/images/arrow-left.png'),
  },
  {
   image: require('../../assets/images/arrow-left.png'),
  },
  {
   image: require('../../assets/images/arrow-left.png'),
  },
  {
   image: require('../../assets/images/arrow-left.png'),
  },
  {
   image: require('../../assets/images/arrow-left.png'),
  },
 ];
 return (
  <SafeAreaView>
   <View style={styles.homeHeader}>
    <Text style={styles.homeTitle}>BOBO</Text>
    <Image source={require('../../assets/images/Union.png')} />
    {controllersArray.map((controller, index) => (
     <PanelButton key={index} icon={controller.image} />
    ))}
   </View>
  </SafeAreaView>
 );
}

export default HomeScreen;
