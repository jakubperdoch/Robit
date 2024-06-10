import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LockKeyhole, Mail, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import ValidationLayout from '../../layouts/ValidationLayout/ValidationLayout';

function RegisterScreen({ navigation }) {
 const [showPassword, setShowPassword] = useState(false);
 const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

 const handleState = (showHandler) => {
  showHandler((showState) => {
   return !showState;
  });
 };

 return (
  <ValidationLayout
   navigation={navigation}
   buttonText={'Register'}
   subTitle={'Hey there,'}
   title={'Welcome'}
  >
   <View style={styles.RegisterScreen_container}>
    <View style={styles.RegisterScreen}>
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
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
       <Text style={styles.RegisterScreen_link}>Already Sign-up?</Text>
      </TouchableOpacity>
     </View>
    </View>
   </View>
  </ValidationLayout>
 );
}

export default RegisterScreen;
