import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LockKeyhole, Mail, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import ValidationLayout from '../../layouts/ValidationLayout/ValidationLayout';
import axios from 'axios';
import ValidationButton from '../../components/ValidationButton/ValidationButton';

function LoginScreen({ navigation }) {
 const [showPassword, setShowPassword] = useState(false);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const handleState = (showHandler) => {
  showHandler((showState) => {
   return !showState;
  });
 };

 onClickHandler = () => {
  navigation.navigate('Introductiond_PswReset');
 };

 const onLoginHandler = () => {
  if (email === '' || password === '') {
   setError('Please fill in all fields');
   setTimeout(() => {
    setError('');
   }, 3000);
   return;
  }

  axios
   .post('https://www.perdochjakub.ninja/api/login', {
    email: email,
    password: password,
   })
   .then((response) => {
    navigation.navigate('Home');
    console.log('nieco sa pojebalo');
   })
   .catch((error) => {
    if (error.response) {
     setError(error.response.data.error);
     setTimeout(() => {
      setError('');
     }, 3000);
    } else {
     setError('Network error, please try again');
     setTimeout(() => {
      setError('');
     }, 3000);
    }
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
      <TextInput
       value={email}
       onChangeText={setEmail}
       type={'email'}
       iconLeft={Mail}
       placeholder={'Email'}
      />
      <TextInput
       type={'password'}
       value={password}
       onChangeText={setPassword}
       iconLeft={LockKeyhole}
       IconRightShow={Eye}
       IconRightHide={EyeOff}
       onClicHandler={handleState.bind(this, setShowPassword)}
       showPassword={showPassword}
       placeholder={'Password'}
       showHandler={showPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
       <Text style={styles.RegisterScreen_link}>Don't have an account?</Text>
      </TouchableOpacity>
     </View>
    </View>
   </View>
   <ValidationButton
    hasIcon={true}
    onClickHandler={() => onLoginHandler()}
    title="Prihlásiť sa"
   />
  </ValidationLayout>
 );
}

export default LoginScreen;
