import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ValidationButton from '../../components/ValidationButton/ValidationButton';
import styles from './styles';
import GoBackButton from '../../components/GoBackButton/GoBackButton';

function ResetPswdLayout({
 children,
 title,
 description,
 nextDirection,
 buttonTitle,
 navigation,
}) {
 const onClickHandler = (location) => {
  navigation.navigate(location);
 };

 const onClickBackHandler = () => {
  navigation.goBack();
 };

 const onClickLoginHandler = () => {
  navigation.navigate('Login');
 };

 const routes = navigation.getState()?.routes;
 const prevRoute = routes[routes.length - 2];

 return (
  <SafeAreaView
   style={{
    alignItems: 'center',
    justifyContent: 'flex-start',
   }}
  >
   {/* go back button */}
   {prevRoute.name !== 'Login' ? (
    <GoBackButton onClickHandler={onClickBackHandler} navigation={navigation} />
   ) : (
    <GoBackButton
     onClickHandler={onClickLoginHandler}
     navigation={navigation}
    />
   )}
   {/* header */}
   <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
   </View>

   {/* children slot */}
   <View style={styles.child}>{children}</View>

   {/* footer */}
   <ValidationButton
    title={buttonTitle}
    onClickHandler={onClickHandler.bind(this, nextDirection)}
   />
  </SafeAreaView>
 );
}

export default ResetPswdLayout;
