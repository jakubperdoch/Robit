import { StyleSheet } from 'react-native';

const styles = (theme = StyleSheet.create({
 home_title: {
  fontFamily: 'Tech',
  fontSize: 42,
  color: '#00A6FB',
 },

 home_screen: {
  alignItems: 'center',
  gap: 12,
  flex: 1,
 },
 home_camera: {
  width: '85%',
  height: '20%',
  borderRadius: 10,
 },
 home_controllersSection: {
  flexDirection: 'row',
  gap: 30,
 },
 home_sectionTitle: {
  fontFamily: 'Tech',
  color: '#fff',
  fontSize: 20,
 },
 home_sectionContainer: {
  alignItems: 'center',
  gap: 12,
 },
 home_aside: {
  alignItems: 'flex-end',
  paddingRight: 40,
  width: '50%',
  alignSelf: 'flex-end',
  gap: 20,
 },
 controlSection: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
 },
 home_armImage: {
  marginStart: 25,
 },
}));

export default styles;
