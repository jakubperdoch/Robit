import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LockKeyhole, Mail, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import ValidationLayout from '../../layouts/ValidationLayout/index';

function LoginScreen({ navigation }) {
 const [showPassword, setShowPassword] = useState(false);

 const handleState = (showHandler) => {
  showHandler((showState) => {
   return !showState;
  });
 };

 return (
  <ValidationLayout
   navigation={navigation}
   buttonText={'Login'}
   subTitle={'Hey there,'}
   title={'Welcome Back'}
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
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
       <Text style={styles.RegisterScreen_link}>Don't have an account?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
       <Text style={styles.RegisterScreen_link}>Forgot your password?</Text>
      </TouchableOpacity>
     </View>
    </View>
   </View>
  </ValidationLayout>
 );
}

export default LoginScreen;
