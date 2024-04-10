import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../../components/Footer/Footer';
import styles from './styles';

function PrivacyScreen({navigation}) {
 const data = [
  {
   id: 1,
   text:
    'This Privacy Policy describes how Robit, the mobile application for controlling robot arms, collects, uses, and discloses your information. Information We Collect We only collect the following information for user authentication: Email Address: Your email address is used to create your Robit account and identify you for login purposes. Password: Your password is stored securely using industry-standard methods to grant access to your Robit account. We never store your password in plain text. We do not collect any other personal information such as name, location, contacts, or usage data. How We Use Your Information We use the information we collect solely for the purpose of allowing you to access your Robit account and control your robot arm. We will not share your information with any third party without your consent. Security We take industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. This includes secure storage of your password and encryption of data in transit. Your Choices You can delete your Robit account at any time. This will remove your email address and password from our system. Changes to this Privacy Policy We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the Robit App. Contact Us If you have any questions about this Privacy Policy, please contact us at perdochjakub@gmail.com. Additional Notes This privacy policy is specific to Robit and reflects the fact that it only collects email and password for authentication. We recommend you never share your Robit password with anyone.',
  },
 ];
 return (
  <SafeAreaView style={{ flex: 1 }}>
   <View style={styles.PrivacyScreen}>
    <Text style={styles.PrivacyScreen_title}>Privacy and Policy</Text>
    <FlatList
     data={data}
     style={styles.PrivacyScreen_textContainer}
     renderItem={({ item }) => (
      <Text style={styles.PrivacyScreen_text}>{item.text}</Text>
     )}
     keyExtractor={(item) => item.id}
    ></FlatList>
   </View>
   <Footer navigation={navigation}  />
  </SafeAreaView>
 );
}

export default PrivacyScreen;
