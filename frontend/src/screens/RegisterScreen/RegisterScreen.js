import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LockKeyhole, Mail, Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import ValidationLayout from '../../layouts/ValidationLayout/ValidationLayout';
import axios from 'axios';
import ValidationButton from '../../components/ValidationButton/ValidationButton';

function RegisterScreen({ navigation }) {
 const [showPassword, setShowPassword] = useState(false);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const handleState = (showHandler) => {
  showHandler((showState) => {
   return !showState;
  });
 };

 const onRegisterHandler = () => {
  axios
   .post('http://www.perdochjakub.ninja/api/register', {
    email: email,
    password: password,
   })
   .then((response) => {
    navigation.navigate('Home');
   })
   .catch((error) => {
    if (email === '' || password === '') {
     setError('Please fill in all fields');
    } else {
     setError('Email already exists');
    }
    setTimeout(() => {
     setError('');
    }, 3000);
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

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
       <Text style={styles.RegisterScreen_link}>Already Sign-up?</Text>
      </TouchableOpacity>
     </View>
    </View>
   </View>
   <ValidationButton
    hasIcon={true}
    onClickHandler={() => onRegisterHandler()}
    title="Registrovat sa"
   />
  </ValidationLayout>
 );
}

export default RegisterScreen;
