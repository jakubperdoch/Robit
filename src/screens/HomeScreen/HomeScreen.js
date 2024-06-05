import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import axios from 'axios';
import PanelButton from '../../components/PanelButton/PanelButton';
import { useState } from 'react';
import GripSlider from '../../components/GripSlider/GripSlider';
import RoboticArm from '../../assets/images/robotic-arm.svg';
import Footer from '../../components/Footer/Footer';

function HomeScreen({ navigation }) {
 const [gripValue, setGripValue] = useState(0);

 const changeGripValue = (newValue) => {
  setGripValue(newValue);
  axios.post('http://172.20.10.5:3000/home', {
   controller: 'grip',
   value: gripValue,
  });
 };

 const controllersArray = [
  {
   title: 'Grip (1)',
   images: [
    require('../../assets/images/arrow-left.png'),
    require('../../assets/images/arrow-right.png'),
   ],
   controller: 'grip',
  },
  {
   title: 'Wrist (2)',
   images: [
    require('../../assets/images/arrow-left.png'),
    require('../../assets/images/arrow-right.png'),
   ],
   controller: 'wrist',
  },
  {
   title: 'Elbow (3)',
   images: [
    require('../../assets/images/arrow-left.png'),
    require('../../assets/images/arrow-right.png'),
   ],
   controller: 'elbow',
  },
  {
   title: 'Shoulder (4)',
   images: [
    require('../../assets/images/arrow-left.png'),
    require('../../assets/images/arrow-right.png'),
   ],
   controller: 'shoulder',
  },
  {
   title: 'Waist (5)',
   images: [
    require('../../assets/images/arrow-left.png'),
    require('../../assets/images/arrow-right.png'),
   ],
   controller: 'waist',
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
         {section.controller === 'grip' ? (
          <GripSlider gripValue={gripValue} changeGripValue={changeGripValue} />
         ) : (
          section.images.map((controller, index) => (
           <PanelButton
            key={index}
            icon={controller}
            controller={section.controller}
            buttonValue={index === 0 ? -1 : 1}
           />
          ))
         )}
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
