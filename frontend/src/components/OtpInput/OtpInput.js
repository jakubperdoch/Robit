import { OtpInput } from 'react-native-otp-entry';
import styles from './styles';

function OtpInputComponent() {
 return (
  <OtpInput
   numberOfDigits={4}
   onFilled={(text) => console.log(`OTP is ${text}`)}
   theme={{
    containerStyle: styles.container,
    pinCodeContainerStyle: styles.pinCodeContainer,
    pinCodeTextStyle: styles.pinCodeText,
    focusStickStyle: styles.focusStick,
    focusedPinCodeContainerStyle: styles.activePinCodeContainer,
   }}
  />
 );
}

export default OtpInputComponent;
