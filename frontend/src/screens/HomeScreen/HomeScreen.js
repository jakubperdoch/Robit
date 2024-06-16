import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import axios from 'axios';
import ControllerButton from '../../components/ControllerButton/ControllerButton';
import { useState } from 'react';
import RoboticArm from '../../assets/images/robotic-arm.svg';
import Footer from '../../components/Footer/Footer';

function HomeScreen({ navigation }) {
 const [gripValue, setGripValue] = useState(0);

 const changeGripValue = (newValue) => {
  setGripValue(newValue);
  axios.post('http://192.168.50.201:3000/home', {
   controller: 'grip',
   value: gripValue,
  });
 };

 const controllersArray = [
  {
   title: 'Claw (1)',
   controller: 'claw',
  },
  {
   title: 'Hand (2)',
   controller: 'hand',
  },
  {
   title: 'Belt (3)',
   controller: 'belt',
  },
  {
   title: 'Main (4)',
   controller: 'main',
  },
  {
   title: 'Base (5)',
   controller: 'base',
  },
 ];
 return (
  <SafeAreaView style={{ flex: 1 }}>
   <View style={styles.home_screen}>
    <Text style={styles.home_title}>BOBO</Text>

    <Image
     style={styles.home_camera}
     source={require('../../assets/images/cameraView.png')}
    />

    <View style={styles.controlSection}>
     <RoboticArm width={220} height={300} style={styles.home_armImage} />
     <View style={styles.home_aside}>
      {controllersArray.map((section, index) => (
       <View key={`section-${index}`} style={styles.home_sectionContainer}>
        <Text style={styles.home_sectionTitle}>{section.title}</Text>
        <View style={styles.home_controllersSection}>
         <ControllerButton
          key={`${index}-button2`}
          controller={section.controller}
          buttonValue={2}
         />
         <ControllerButton
          key={`${index}-button1`}
          controller={section.controller}
          buttonValue={1}
         />
        </View>
       </View>
      ))}
     </View>
    </View>
   </View>
   <Footer navigation={navigation} />
  </SafeAreaView>
 );
}

export default HomeScreen;
