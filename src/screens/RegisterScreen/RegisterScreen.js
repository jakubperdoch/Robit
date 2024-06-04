import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { LockKeyhole, Mail, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import FormButton from '../../components/FormButton/FormButton';

function RegisterScreen({ navigation }) {
 const [showPassword, setShowPassword] = useState(false);
 const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

 const handleState = (showHandler) => {
  showHandler((showState) => {
   return !showState;
  });
 };

 const onClickHandler = (state) => {
  navigation.navigate('Home');
 };

 return (
  <SafeAreaView>
   <View style={styles.RegisterScreen_container}>
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
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
       <Text style={styles.RegisterScreen_link}>Already Sign-up?</Text>
      </TouchableOpacity>
     </View>
    </View>
    <FormButton
     onClickHandler={onClickHandler.bind(this, 'Register')}
     title={'Register'}
    />
   </View>
  </SafeAreaView>
 );
}

export default RegisterScreen;
