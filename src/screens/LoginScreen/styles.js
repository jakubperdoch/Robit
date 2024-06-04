import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 RegisterScreen: {
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingVertical: 60,
  gap: 30,
 },
 RegisterScreen_header: { alignItems: 'center', gap: 10 },
 RegisterScreen_subTitle: {
  color: '#00A6FB',
  fontFamily: 'Mont-Regular',
  fontSize: 20,
 },
 RegisterScreen_title: { fontFamily: 'Tech', color: '#00A6FB', fontSize: 33 },
 RegisterScreen_inputsContainer: {
  gap: 20,
  width: '100%',
  alignItems: 'center',
 },
 RegisterScreen_link: {
  textDecorationLine: 'underline',
  color: '#ADA4A5',
  fontFamily: 'Tech',
  fontSize: 16,
 },
 RegisterScreen_container: {
  height: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
 },
});

export default styles;
