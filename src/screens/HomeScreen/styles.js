import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 home_title: {
  fontFamily: 'Tech',
  fontSize: 42,
  color: '#00A6FB',
  marginTop: 5,
 },

 home_header: {
  alignItems: 'center',
  gap: 20,
  height: '100%',
 },
 home_camera: {
  width: '90%',
  height: '23%',
  borderRadius: 10,
 },
 home_controllersSection: {
  flexDirection: 'row',
  gap: 30,
 },
 home_sectionTitle: {
  fontFamily: 'Tech',
  color: '#fff',
  fontSize: 21,
 },
 home_sectionContainer: {
  alignItems: 'center',
  gap: 10,
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
  width: '53%',
  marginStart: 15,
  height: '65%',
 },
});

export default styles;
