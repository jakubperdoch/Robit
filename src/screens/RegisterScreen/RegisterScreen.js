import { Input, InputField, InputSlot, InputIcon } from '@gluestack-ui/themed';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { LockKeyhole, User, Mail, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';

function RegisterScreen({ navigation }) {
 const [showPassword, setShowPassword] = useState(false);
 const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

 const handleState = (showHandler) => {
  showHandler((showState) => {
   return !showState;
  });
 };

 return (
  <SafeAreaView>
   <View style={styles.RegisterScreen}>
    <View style={styles.RegisterScreen_header}>
     <Text style={styles.RegisterScreen_subTitle}>Hey there,</Text>
     <Text style={styles.RegisterScreen_title}>Welcome</Text>
    </View>
    <View style={styles.RegisterScreen_inputsContainer}>
     <TextInput type={'email'} iconLeft={Mail} placeholder={'Email'} />
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
     <Text style={styles.RegisterScreen_link}>Already Sign-up?</Text>
    </View>
   </View>
  </SafeAreaView>
 );
}

export default RegisterScreen;
