import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import PanelButton from '../../components/PanelButton/PanelButton';
import { useState } from 'react';
import GripSlider from '../../components/GripSlider/GripSlider';

function HomeScreen() {
 const [gripValue, setGripValue] = useState(0);

 const changeGripValue = (newValue) => {
  setGripValue(newValue);
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
   controller: 'Waist',
  },
 ];
 return (
  <SafeAreaView>
   <View style={styles.home_header}>
    <Text style={styles.home_title}>BOBO</Text>

    <Image
     style={styles.home_camera}
     source={require('../../assets/images/cameraView.png')}
    />

    <View style={styles.controlSection}>
     <Image style={styles.home_armImage} source={require('../../assets/images/robotic-arm.png')} />
     <View style={styles.home_aside}>
      {controllersArray.map((section, index) => (
       <View key={`section-${index}`} style={styles.home_sectionContainer}>
        <Text style={styles.home_sectionTitle}>{section.title}</Text>
        <View style={styles.home_controllersSection}>
         {section.controller === 'grip' ? (
          <GripSlider gripValue={gripValue} changeGripValue={changeGripValue} />
         ) : (
          section.images.map((controller, index) => (
           <PanelButton key={index} icon={controller} />
          ))
         )}
        </View>
       </View>
      ))}
     </View>
    </View>
   </View>
  </SafeAreaView>
 );
}

export default HomeScreen;
