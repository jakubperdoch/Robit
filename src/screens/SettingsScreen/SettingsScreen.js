import Footer from '../../components/Footer/Footer';
import { View, Text, TouchableOpacity } from 'react-native';
import {
 SafeAreaView,
 useSafeAreaInsets,
} from 'react-native-safe-area-context';
import styles from './styles';
import RoboticArmIcon from '../../assets/images/roboticArmIcon.svg';
import PositionIcon from '../../assets/images/positionIcon.svg';
import ArrowIcon_Right from '../../assets/images/arrowIcon-right.svg';
import DarkModeSwicth from '../../components/DarkModeSwitch/DarkModeSwicth';
import { useState, useEffect } from 'react';

function SettingsScreen({ navigation }) {
 const insets = useSafeAreaInsets();
 const [themeValue, changeThemeValue] = useState(false);

 const changeTheme = () => {
  changeThemeValue(!themeValue);
 };
 useEffect(() => {
  console.log('Theme Changed:', themeValue);
 }, [themeValue]);

 const accountSettings = [
  {
   title: 'Edit Profile',
   destination: 'editProfile',
  },
  {
   title: 'Change Password',
   destination: 'changePassword',
  },
  {
   title: 'Dark Mode',
   type: 'switchTheme',
  },
 ];

 const additionalSettings = [
  {
   title: 'About Us',
   destination: 'About Us',
  },
  {
   title: 'Privacy Policy',
   destination: 'privacyPolicy',
  },
  {
   title: 'Terms and Conditions',
   destination: 'termsConditions',
  },
 ];

 return (
  <SafeAreaView style={{ flex: 1 }}>
   <View style={styles.screen}>
    <View style={styles.header}>
     <RoboticArmIcon width={45} height={50} />
     <Text style={styles.header_robotName}>Bobo</Text>
    </View>

    <View style={styles.positionContainer}>
     <Text style={styles.positionContainer_title}>Original Position</Text>
     <TouchableOpacity>
      <PositionIcon width={35} height={35} />
     </TouchableOpacity>
    </View>

    <View style={styles.accountContainer}>
     <Text style={styles.accountContainer_title}>Account Settings</Text>
     {accountSettings.map((section, index) => (
      <View key={`section-${index}`} style={styles.accountContainer_section}>
       <Text style={styles.accountContainer_sectionTitle}>{section.title}</Text>
       {section.type === 'switchTheme' ? (
        <DarkModeSwicth changeTheme={changeTheme} themeValue={themeValue} />
       ) : (
        <TouchableOpacity>
         <ArrowIcon_Right />
        </TouchableOpacity>
       )}
      </View>
     ))}
    </View>

    <View style={styles.additionalContainer}>
     <Text style={styles.accountContainer_title}>More</Text>
     {additionalSettings.map((section, index) => (
      <View key={`section-${index}`} style={styles.accountContainer_section}>
       <Text style={styles.accountContainer_sectionTitle}>{section.title}</Text>
       <TouchableOpacity>
        <ArrowIcon_Right />
       </TouchableOpacity>
      </View>
     ))}
    </View>
   </View>
   <Footer navigation={navigation} style={{ paddingBottom: insets.bottom }} />
  </SafeAreaView>
 );
}

export default SettingsScreen;
