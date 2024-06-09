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
import { useState } from 'react';

function SettingsScreen({ navigation }) {
 const insets = useSafeAreaInsets();
 const [themeValue, changeThemeValue] = useState(false);

 const handleLogOut = () => {
  navigation.navigate('Login');
 };

 const accountSettings = [
  {
   title: 'Change Password',
   destination: 'Introductiond_PswReset',
  },
 ];

 const additionalSettings = [
  {
   title: 'About Us',
   destination: 'Settings_AboutUs',
  },
  {
   title: 'Privacy Policy',
   destination: 'Settings_PrivacyPolicy',
  },
  {
   title: 'Terms and Conditions',
   destination: 'Settings_TermsConditions',
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
       <TouchableOpacity
        onPress={() => navigation.navigate(section.destination)}
       >
        <ArrowIcon_Right />
       </TouchableOpacity>
      </View>
     ))}
    </View>

    <View style={styles.additionalContainer}>
     <Text style={styles.accountContainer_title}>More</Text>
     {additionalSettings.map((section, index) => (
      <View key={`section-${index}`} style={styles.accountContainer_section}>
       <Text style={styles.accountContainer_sectionTitle}>{section.title}</Text>
       <TouchableOpacity
        onPress={() => navigation.navigate(section.destination)}
       >
        <ArrowIcon_Right />
       </TouchableOpacity>
      </View>
     ))}
    </View>
    <TouchableOpacity onPress={() => handleLogOut()}>
     <Text style={styles.logOut_link}>Log Out</Text>
    </TouchableOpacity>
   </View>
   <Footer navigation={navigation} style={{ paddingBottom: insets.bottom }} />
  </SafeAreaView>
 );
}

export default SettingsScreen;
