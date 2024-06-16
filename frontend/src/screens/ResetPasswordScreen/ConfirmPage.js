import ResetPswdLayout from '../../layouts/PasswordResetLayout/ResetPasswordLayout';
import TextInput from '../../components/TextInput/TextInput';
import { LockKeyhole, Eye, EyeOff } from 'lucide-react-native';
import { View } from 'react-native';
import styles from './styles';
import { useState } from 'react';

function ConfirmPswdScreen({ navigation }) {
 const [showPassword, setShowPassword] = useState(false);
 const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

 const handleState = (showHandler) => {
  showHandler((showState) => {
   return !showState;
  });
 };

 return (
  <ResetPswdLayout
   navigation={navigation}
   title={'Set a new password'}
   description={
    'Create a new password. Ensure it differs from previous ones for security'
   }
   nextDirection={'Login'}
   buttonTitle={'Update Password'}
  >
   <View style={styles.ConfirmPswd_Container}>
    <TextInput
     type={'password'}
     iconLeft={LockKeyhole}
     IconRightShow={Eye}
     IconRightHide={EyeOff}
     onClicHandler={handleState.bind(this, setShowPassword)}
     showPassword={showPassword}
     placeholder={'Password'}
     showHandler={showPassword}
    />
    <TextInput
     type={'password'}
     iconLeft={LockKeyhole}
     IconRightShow={Eye}
     IconRightHide={EyeOff}
     onClicHandler={handleState.bind(this, setShowRepeatedPassword)}
     showPassword={showRepeatedPassword}
     placeholder={'Repeat Password'}
    />
   </View>
  </ResetPswdLayout>
 );
}

export default ConfirmPswdScreen;
