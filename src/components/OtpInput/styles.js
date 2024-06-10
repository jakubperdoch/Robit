import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: { gap: 40, flexDirection: 'row', justifyContent: 'center' },
 pinCodeContainer: {
  backgroundColor: 'white',
  borderRadius: 10,
  width: 50,
 },
 pinCodeText: {
  color: 'black',
  fontFamily: 'Tech',
 },
 focusStick: {
  color: '#00A6FB',
  borderColor: '#00A6FB',
  borderWidth: 1,
 },
 activePinCodeContainer: { borderColor: '#00A6FB', borderWidth: 1 },
});
export default styles;
