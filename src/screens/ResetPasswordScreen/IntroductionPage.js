import ResetPswdLayout from '../../layouts/PasswordResetLayout/ResetPasswordLayout';
import TextInput from '../../components/TextInput/TextInput';
import { Mail } from 'lucide-react-native';
import { View } from 'react-native';
import styles from './styles';

function IntroductiondPswdScreen({ navigation }) {
 return (
  <ResetPswdLayout
   navigation={navigation}
   title={'Forgot Password ?'}
   description={
    'Don’t worry ! It happens. Please enter the phone number we will send the OTP in this phone number.'
   }
   nextDirection={'Password_Verification'}
   buttonTitle={'Continue'}
  >
   <View style={styles.ResetPswdScreen_Container}>
    <TextInput type={'email'} iconLeft={Mail} placeholder={'Email'} />
   </View>
  </ResetPswdLayout>
 );
}

export default IntroductiondPswdScreen;
