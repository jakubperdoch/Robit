import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../components/Footer/Footer';
import styles from './styles';
import GoBackButton from '../../components/GoBackButton/GoBackButton';

function AboutUsScreen({ navigation }) {
 const creators = [
  {
   name: 'Jakub Perďoch',
   desc:
    "Jakub Perdoch is the creative force behind our app's cool look and easy-to-use design. He made it all happen with React Native, making sure everything looks awesome and works smoothly.",
   image: 'https://github.com/jakubperdoch.png',
  },
  {
   name: 'Kristian Válek',
   desc:
    'Kristian Válek is our coding genius. He wrote all the cool stuff in Python that makes our robotic arm move just the way we want it to. Thanks to him, our arm is super precise and reliable.',
   image: 'https://github.com/Los-Kaleros.png',
  },
  {
   name: 'Jakub Hulín',
   desc:
    'Jakub Hulín is the 3D mastermind who brought our robotic arm to life. He designed it from scratch and made sure it looks amazing in every detail. Thanks to him, our arm is not just functional but also super cool to look at!',
   image: 'https://github.com/SleepFoxx.png',
  },
 ];

 return (
  <SafeAreaView style={{ flex: 1 }}>
   <GoBackButton navigation={navigation} />
   <View style={styles.AboutUsScreen}>
    {creators.map((creator, index) => (
     <View key={index} style={styles.AboutUsScreen_profile}>
      <View style={styles.AboutUsScreen_profileHeader}>
       <Image
        source={{ uri: creator.image }}
        style={styles.AboutUsScreen_profilePicture}
       />
       <Text style={styles.AboutUsScreen_profileName}>{creator.name}</Text>
      </View>
      <Text style={styles.AboutUsScreen_profileDesc}>{creator.desc}</Text>
     </View>
    ))}
   </View>
   <Footer navigation={navigation} />
  </SafeAreaView>
 );
}

export default AboutUsScreen;
