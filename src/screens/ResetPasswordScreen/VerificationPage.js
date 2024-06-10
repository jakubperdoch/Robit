import ResetPswdLayout from '../../layouts/PasswordResetLayout/ResetPasswordLayout';
import OtpInputComponent from '../../components/OtpInput/OtpInput';

function VerificationPage() {
 return (
  <ResetPswdLayout
   title={'Verification'}
   description={'Please enter the code sent to your email.'}
   nextDirection={'NewPassword'}
   buttonTitle={'Next'}
  >
   <OtpInputComponent />
  </ResetPswdLayout>
 );
}

export default VerificationPage;
