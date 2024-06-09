import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ValidationButton from '../../components/ValidationButton/ValidationButton';

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

 return (
  <SafeAreaView
   style={{
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
   }}
  >
   {/* header */}
   <View>
    <Text>{title}</Text>
    <Text>{description}</Text>
   </View>

   {/* children slot */}
   {children}

   {/* footer */}
   <ValidationButton
    title={buttonTitle}
    onClickHandler={onClickHandler.bind(this, nextDirection)}
   />
  </SafeAreaView>
 );
}

export default ResetPswdLayout;