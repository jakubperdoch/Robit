import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 PrivacyScreen: {
  height: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: 15,
  gap: 20,
 },
 PrivacyScreen_title: {
  color: '#FFF',
  fontFamily: 'Tech',
  fontSize: 23,
 },
 PrivacyScreen_textContainer: {
  height: 650,
  width: '100%',
  flexGrow: 0,
  paddingHorizontal: 5,
 },
 PrivacyScreen_text: {
  color: '#ADADAD',
  fontFamily: 'Tech',
  fontSize: 17,
  textAlign: 'justify',
 },
});

export default styles;
