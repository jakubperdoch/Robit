import ResetPswdLayout from '../../layouts/PasswordResetLayout/ResetPasswordLayout';
import OtpInputComponent from '../../components/OtpInput/OtpInput';

function VerificationPage({ navigation }) {
 return (
  <ResetPswdLayout
   title={'Verification'}
   description={'Please enter the code sent to your email.'}
   nextDirection={'Confirm_PswdReset'}
   buttonTitle={'Next'}
   navigation={navigation}
  >
   <OtpInputComponent />
  </ResetPswdLayout>
 );
}

export default VerificationPage;
