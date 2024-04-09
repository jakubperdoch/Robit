import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 screen: {
  height: '100%',
  alignItems: 'center',
  gap: 30,
  paddingTop: 30,
 },
 header: {
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  gap: 20,
  borderColor: '#cacacaaf',
  borderBottomWidth: 1,
  paddingStart: 30,
  paddingBottom: 10,
 },
 header_robotName: {
  color: '#FFF',
  fontFamily: 'Tech',
  fontSize: 30,
 },
 positionContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingHorizontal: 30,
  borderColor: '#cacacaaf',
  borderBottomWidth: 1,
  paddingBottom: 30,
 },
 positionContainer_title: {
  color: '#FFF',
  fontFamily: 'Tech',
  fontSize: 18,
 },
 accountContainer: {
  borderColor: '#cacacaaf',
  borderBottomWidth: 1,
  gap: 25,
  alignItems: 'flex-start',
  width: '100%',
  paddingBottom: 30,
  paddingHorizontal: 30,
 },
 accountContainer_title: {
  color: '#ADADAD',
  fontFamily: 'Tech',
  fontSize: 21,
 },
 accountContainer_section: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
 },
 accountContainer_sectionTitle: {
  color: '#FFF',
  fontFamily: 'Tech',
  fontSize: 18,
 },
 additionalContainer: {
  gap: 25,
  alignItems: 'flex-start',
  width: '100%',
  paddingBottom: 30,
  paddingHorizontal: 30,
 },
});

export default styles;
