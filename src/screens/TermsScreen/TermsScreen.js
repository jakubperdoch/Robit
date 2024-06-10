import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../components/Footer/Footer';
import styles from './styles';
import GoBackButton from '../../components/GoBackButton/GoBackButton';

function TermsScreen({ navigation }) {
 const data = [
  {
   id: 1,
   text:
    "These Terms and Conditions ('Terms') govern your access to and use of the Robit mobile application for controlling robot arms developed by SPSIT. By downloading, installing, or using the App, you agree to be bound by these Terms. 1. License Grant We grant you a non-exclusive, non-transferable license to access and use the App on a single mobile device for your personal, non-commercial use only. You may not modify, reverse engineer, decompile, disassemble, or attempt to discover the source code of the App. 2. User Accounts You are responsible for maintaining the confidentiality of your Robit account login information, including your email address and password. You are fully responsible for all activities that occur under your account. 3. Acceptable Use You agree to use the App in a manner consistent with all applicable laws and regulations. You will not use the App to: Cause harm to yourself, others, or property. Interfere with the operation of the App or any other user's use of the App. Upload or transmit any viruses, malware, or other harmful code. Violate the intellectual property rights of others. 4. Disclaimer of Warranties THE APP IS PROVIDED 'AS IS' AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL FUNCTION WITHOUT INTERRUPTION, ERROR-FREE, OR VIRUS-FREE. 5. Limitation of Liability TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE APP. 6. Termination We may terminate your access to the App at any time, for any reason, without notice. 7. Governing Law These Terms shall be governed by and construed in accordance with the laws of [Your Country] without regard to its conflict of law provisions. 8. Entire Agreement These Terms constitute the entire agreement between you and us regarding your use of the App. 9. Contact Us If you have any questions about these Terms, please contact us at perdochjakub@gmail.com. Additional Notes You may want to consult with a lawyer to ensure your Terms and Conditions comply with all applicable laws and regulations in your country. These Terms and Conditions are intended to be a starting point and can be modified to fit the specific needs of your App.",
  },
 ];
 return (
  <SafeAreaView style={{ flex: 1 }}>
   <GoBackButton navigation={navigation} />
   <View style={styles.PrivacyScreen}>
    <Text style={styles.PrivacyScreen_title}>Terms and Conditions</Text>
    <FlatList
     data={data}
     style={styles.PrivacyScreen_textContainer}
     renderItem={({ item }) => (
      <Text style={styles.PrivacyScreen_text}>{item.text}</Text>
     )}
     keyExtractor={(item) => item.id}
    ></FlatList>
   </View>
   <Footer navigation={navigation} />
  </SafeAreaView>
 );
}

export default TermsScreen;
