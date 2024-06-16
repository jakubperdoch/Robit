import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 AboutUsScreen: {
  gap: 30,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 30,
  height: '95%',
  paddingTop: 30,
 },
 AboutUsScreen_profile: {
  flexDirection: 'column',
  gap: 15,
  borderBottomWidth: 1,
  borderColor: '#cacacaaf',
  paddingBottom: 15,
 },
 AboutUsScreen_profilePicture: {
  height: 80,
  width: 80,
  borderRadius: 80,
 },
 AboutUsScreen_profileName: {
  color: '#FFF',
  fontFamily: 'Tech',
  fontSize: 20,
 },
 AboutUsScreen_profileDesc: {
  color: '#ADADAD',
  fontFamily: 'Tech',
  fontSize: 15,
 },
 AboutUsScreen_profileHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 20,
 },
});

export default styles;
